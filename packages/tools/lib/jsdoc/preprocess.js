const process = require("process");
const path = require("path");
const fs = require("fs/promises");

const inputDir = process.argv[2];
const sourceDir = process.argv[3];

const preprocessTypes = async () => {
	try {
		const { globby } = await import("globby");
		const fileNames = await globby(inputDir + "**/types/*.js");

		return Promise.all(fileNames.map(processTypeFile));
	} catch(e) {
		console.log("JSDoc types preprocess failed: ", e);
	}
};

const processTypeFile = async (fileName) => {
	let fileContent = `${await fs.readFile(fileName)}`;

	const re = new RegExp(`(\\/\\*\\*\\s*\\n([^\\*]|(\\*(?!\\/)))*\\*\\/)\\s+[\\w\\d]+\\[\\"([\\w\\d]+)\\"\\]\\s*=\\s*\\"([\\w\\d]+)\\";`, "gm")
	let matches = [...fileContent.matchAll(re)];

	// Get all type values
	const typeData = matches.map(match => {
		return {
			comment: match[1],
			key: match[4],
			value: match[5],
		};
	});
	if (typeData.length === 0) {
		return;
	}

	const typeName = path.parse(fileName).name;

	matches = fileContent.match(/\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//gm);
	const comment = matches[0];

	const propsCode = typeData.map(item => {
		return `${item.comment}\n get ${item.key}() { return "${item.value}"; }`;
	}).join("\n");

	const newClassCode = `
	${comment}
	class ${typeName} {
		${propsCode}
	};

	export default ${typeName};`;

	fileContent = newClassCode;

	return fs.writeFile(fileName, fileContent);
};

const preprocessComponents = async () => {
	if (!sourceDir) {
		return; // if the second param was not passed, there are no components
	}

	try {
		const { globby } = await import("globby");
		const fileNames = await globby(sourceDir + "/*.ts");

		return Promise.all(fileNames.map(processComponentFile));
	} catch(e) {
		console.log("JSDoc components preprocess failed: ", e);
	}
};

const isClass = text => {
	return text.includes("@abstract") || text.includes("@class");
};

const isAnnotationComment = (comment, fileContent) =>  {
	const index = fileContent.indexOf(comment);
	return fileContent.substr(index + comment.length).trim().charAt(0) === "@";
}

const processComponentFile = async (fileName) => {
	// source file (src/*.ts)
	let tsFileContent = `${await fs.readFile(fileName)}`;

	// Skip all non-component files
	if (!isClass(tsFileContent)) {
		return;
	}

	// Gather all JSDocs from the original .ts file
	const allJSDocsRegExp = new RegExp(`\\/\\*\\*(.|\\n)+?\\s+\\*\\/`, "gm");
	let allJSDocs = [...tsFileContent.matchAll(allJSDocsRegExp)];
	allJSDocs = allJSDocs.map(match => match[0]); // all /** ..... */ comments

	// Find where the class is defined in the original file
	const tsClassDefinitionRegExp = new RegExp(`^(abstract\\s)?class [\\w\\d_]+`, "gm");
	let tsClassDefinitionMatch = tsFileContent.match(tsClassDefinitionRegExp);
	if (!tsClassDefinitionMatch) {
		return; // no class defined in this .ts file
	}
	const tsClassDefinition = tsClassDefinitionMatch[0];
	const tsClassDefinitionIndex = tsFileContent.indexOf(tsClassDefinition);

	// Gather all JSDocs that are before the class definition (except for the @class one)
	const JSDocsToAppend = [];
	allJSDocs.forEach(JSDoc => {
		if (!isClass(JSDoc) && (tsFileContent.indexOf(JSDoc) < tsClassDefinitionIndex || isAnnotationComment(JSDoc, tsFileContent))) {
			JSDocsToAppend.push(JSDoc);
		}
	});



	// destination file (jsdoc-dist/*.js)
	const destFileName = fileName.replace(sourceDir, inputDir).replace(/\.ts$/, ".js");
	let jsFileContent = `${await fs.readFile(destFileName)}`;

	const classDefinitionRegExp = new RegExp(`let.*? = class`, "gm");
	let classDefinitionMatch = jsFileContent.match(classDefinitionRegExp);
	if (!classDefinitionMatch) {
		return; // not a file, generated by typescript, nothing to do here
	}

	const classDefinition = classDefinitionMatch[0];
	const classDefinitionIndex = jsFileContent.indexOf(classDefinition); // classDefinitionIndex is the position in the file where the class is defined

	// All comments before the class definition, except for the @class comment, must be removed
	allJSDocs.forEach(JSDoc => {
		if (!isClass(JSDoc) && jsFileContent.indexOf(JSDoc) < classDefinitionIndex) {
			jsFileContent = jsFileContent.replace(JSDoc, "");
		}
	});

	// Put all other comments at the end of the file
	jsFileContent = jsFileContent + "\n\n" + JSDocsToAppend.join("\n\n");
	return fs.writeFile(destFileName, jsFileContent);
};

Promise.all([
	preprocessTypes(),
	preprocessComponents(),
]).then(() => {
	console.log("JSDoc preprocess ready.");
});

