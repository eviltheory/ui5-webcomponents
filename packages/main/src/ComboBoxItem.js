import ComboBoxItemBase from "./ComboBoxItemBase.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-cb-item",
	properties: /** @lends  sap.ui.webcomponents.main.ComboBoxItem.prototype */ {
		/**
		 * Defines the text of the component.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: { type: String },
		/**
		 * Defines the additional text of the component.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @since 1.0.0-rc.11
		 * @public
		 */
		additionalText: { type: String },
	},
};

/**
 * @class
 * The <code>ui5-cb-item</code> represents the item for a <code>ui5-combobox</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ComboBoxItem
 * @extends UI5Element
 * @tagname ui5-cb-item
 * @implements sap.ui.webcomponents.main.IComboBoxItem
 * @public
 */
class ComboBoxItem extends ComboBoxItemBase {
	static get metadata() {
		return metadata;
	}

	get effectiveText() {
		return this.text;
	}
}

ComboBoxItem.define();

export default ComboBoxItem;
