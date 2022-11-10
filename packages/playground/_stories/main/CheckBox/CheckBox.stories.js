import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import argTypes from "./argTypes.js";

export default {
    title: "Components/CheckBox",
    component: "ui5-checkbox",
    subcomponents: {},
    argTypes,
};


export const Template0 = () => html`
<h3>Basic CheckBox</h3>
	<div class="snippet">
		<ui5-checkbox text="Chocolate" checked=""></ui5-checkbox>
		<ui5-checkbox text="Strawberry" checked=""></ui5-checkbox>
		<ui5-checkbox text="Waffles" checked="" value-state="Error"></ui5-checkbox>
		<ui5-checkbox text="Cake" checked="" value-state="Warning"></ui5-checkbox>
	</div>
`;


export const Template1 = () => html`
<h3>CheckBox states</h3>
	<div class="snippet">
		<ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
		<ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
		<ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
		<ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
		<ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success disabled" disabled="" value-state="Success" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error disabled" disabled="" value-state="Error" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning disabled " disabled="" value-state="Warning" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information disabled " disabled="" value-state="Information" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success readonly" readonly="" value-state="Success" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error readonly" readonly="" value-state="Error" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning readonly" readonly="" value-state="Warning" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information readonly" readonly="" value-state="Information" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success indeterminate" value-state="Success" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error indeterminate" value-state="Error" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning indeterminate" value-state="Warning" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information indeterminate" value-state="Information" indeterminate="" checked=""></ui5-checkbox>
	</div>
`;


export const Template2 = () => html`
<h3>CheckBox with Text Wrapping</h3>
	<div class="snippet">
		<ui5-checkbox text="ui5-checkbox with 'wrapping-type=Normal' set and some long text." wrapping-type="Normal" style="width:200px"></ui5-checkbox>
		<ui5-checkbox text="Another ui5-checkbox with very long text here" wrapping-type="Normal" style="width:200px"></ui5-checkbox>
	</div>
`;


export const Template3 = () => html`
<h3>CheckBox with indeterminate</h3>
	<div class="snippet">
		<ui5-checkbox id="result-cb" text="Select / deselect all" indeterminate="" checked=""></ui5-checkbox>
		<hr>
		<div style="display: flex; flex-direction: column; align-items: flex-start;">
			<ui5-checkbox id="cb1" text="English" checked=""></ui5-checkbox>
			<ui5-checkbox id="cb2" text="German"></ui5-checkbox>
			<ui5-checkbox id="cb3" text="French"></ui5-checkbox>
		</div>
		<script>
			var resultCb = document.querySelector("#result-cb");
			var langCbs = Array.from(document.querySelectorAll("[id^=cb]"));
			langCbs.forEach(cbEl => {
				cbEl.addEventListener("change", event => {
					const hasChecked = langCbs.some(cb => cb.checked);
					const hasUnchecked = langCbs.some(cb => !cb.checked);
					resultCb.indeterminate = hasChecked && hasUnchecked;
					resultCb.checked = hasChecked;
				});
			});
			resultCb.addEventListener("change", event => {
				langCbs.forEach(cb => cb.checked = event.target.checked);
			});
		</script>
	</div>
`;
Template3.parameters = {
    docs: {
        // Opt-out of inline rendering
        inlineStories: false,
    },
};
		