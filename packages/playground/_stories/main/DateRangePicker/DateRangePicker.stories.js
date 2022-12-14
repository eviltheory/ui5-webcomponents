import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import argTypes from "./argTypes.js";

export default {
    title: "Components/DateRangePicker",
    component: "ui5-daterange-picker",
    subcomponents: {},
    argTypes,
};


export const Template0 = () => html`
<h3>Basic DateRangePicker</h3>
	<div class="snippet">
		<div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
		</div>
	</div>
`;

export const Template1 = () => html`
<h3>DateRangePicker with Minimum and Maximum Date - 1/1/2020 - 4/5/2020 format-pattern="dd/MM/yyyy"</h3>
	<div class="snippet">
		<div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>
		</div>
	</div>
`;

export const Template2 = () => html`
<h3>DateRangePicker with format-pattern='long'</h3>
	<div class="snippet">
		<div class="daterange-picker-width">
			<ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>
		</div>
	</div>
`;

export const Template3 = () => html`
<h3>Disabled DateRangePicker</h3>
	<div class="snippet">
		<div class="daterange-picker-width">
			<ui5-daterange-picker disabled="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
	</div>
`;

export const Template4 = () => html`
<h3>readonly DateRangePicker</h3>
	<div class="snippet">
		<div class="daterange-picker-width">
			<ui5-daterange-picker readonly="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
	</div>
`;