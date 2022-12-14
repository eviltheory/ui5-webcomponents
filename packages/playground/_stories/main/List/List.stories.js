import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import argTypes from "./argTypes.js";

export default {
    title: "Components/List",
    component: "ui5-list",
    subcomponents: {'StandardListItem' : 'ui5-li', 'CustomListItem' : 'ui5-li-custom', 'GroupHeaderListItem' : 'ui5-li-groupheader'},
    argTypes,
};


export const Template0 = () => html`
<h3>Basic List</h3>
	<div class="snippet">
		<ui5-list id="myList" class="full-width">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Information">Blueberry</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
		</ui5-list>
	</div>
`;

export const Template1 = () => html`
<h3>List with  growing="Scroll"</h3>
	<div class="snippet">
		<ui5-list id="infiniteScrollEx" style="height: 300px" growing="Scroll">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Error">Banana</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
			<ui5-li icon="nutrition-activity" description="An apple is a sweet, edible fruit produced by an apple tree " additional-text="In-stock" additional-text-state="Success">Apple</ui5-li>
			<ui5-li icon="nutrition-activity" description="The peach (Prunus persica) is a deciduous tree native to the region of Northwest China" additional-text="Expires" additional-text-state="Warning">Peach</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pomelo is the largest citrus fruit from the family Rutaceae and the principal ancestor of the grapefruit" additional-text="Re-stock" additional-text-state="Error">Pomelo</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pear (/ˈpɛər/) tree and shrub are a species of genus Pyrus, bearing the pomaceous fruit of the same name." additional-text="Re-stock" additional-text-state="Error">Pear</ui5-li>
		</ui5-list>
	</div>
	<script>
		function template(i) {
			var li = document.createElement("ui5-li");
			li.textContent = "Fruit name";
			li.description = "the description goes here " + i;
			li.additionalText = "Available";
			li.additionalTextState = "Success";
			li.icon = "nutrition-activity" 
			return li;
		}
		function insertItems(el, num) {
			for(var i = 0; i < num; i++) {
				el.appendChild(template(i));
			}
		}
		infiniteScrollEx.addEventListener("load-more", (e) => {
			var el = infiniteScrollEx;
			el.busy = true;
			setTimeout(() => {
				insertItems(el, 5);
				el.busy = false;
			}, 200);
		});
	</script>
`;

export const Template2 = () => html`
<h3>List in Single-selection Mode</h3>
	<div class="snippet">
		<ui5-list id="country-selector" class="full-width" mode="SingleSelect" header-text="Select a country:">
			<ui5-li selected="" icon="map" icon-end="">Argentina</ui5-li>
			<ui5-li icon="map" icon-end="">Bulgaria</ui5-li>
			<ui5-li icon="map" icon-end="">China</ui5-li>
			<ui5-li type="Inactive" icon="map" icon-end="">Denmark (ui5-li type='Inactive')</ui5-li>
		</ui5-list>
		<script>
			document.getElementById('country-selector').addEventListener("selection-change", function (event) {
				var selectedItems = event.detail.selectedItems;
				alert("The selected item:  " + selectedItems[0].textContent);
			});
		</script>
	</div>
`;

export const Template3 = () => html`
<h3>List in Multi-selection Mode</h3>
	<div class="snippet">
		<ui5-list id="myList1" class="samples-margin-bottom full-width" mode="MultiSelect" header-text="Multiple selection is possible">
				<ui5-li>Pineapple</ui5-li>
				<ui5-li selected="">Orange</ui5-li>
				<ui5-li>Banana</ui5-li>
				<ui5-li>Mango</ui5-li>
		</ui5-list>
	</div>
`;

export const Template4 = () => html`
<h3>Busy List</h3>
	<div class="snippet">
		<ui5-list header-text="Fetching data ..." class="full-width" busy=""></ui5-list>
	</div>
`;

export const Template5 = () => html`
<h3>List With GroupHeaders</h3>
	<div class="snippet">
		<ui5-list header-text="Community" mode="MultiSelect">
			<ui5-li-groupheader>Front End Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end="">Jennifer</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_4.png" icon="navigation-right-arrow" icon-end="">Lora</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_5.png" icon="navigation-right-arrow" icon-end="">Carlotta</ui5-li>
			<ui5-li-groupheader>Back End Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/man_avatar_1.png" icon="navigation-right-arrow" icon-end="">Clark</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_1.png" icon="navigation-right-arrow" icon-end="">Ellen</ui5-li>
			<ui5-li image="../../../assets/images/avatars/man_avatar_2.png" icon="navigation-right-arrow" icon-end="">Adam</ui5-li>
			<ui5-li-groupheader>FullStack Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_2.png" icon="navigation-right-arrow" icon-end="">Susan</ui5-li>
			<ui5-li image="../../../assets/images/avatars/man_avatar_3.png" icon="navigation-right-arrow" icon-end="">David</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end="">Natalie</ui5-li>
		</ui5-list>
	</div>
`;

export const Template6 = () => html`
<h3>List items using imageContent slot</h3>
	<div class="snippet">
		<ui5-list class="full-width">
			<ui5-li> Avatar inside imageContent slot
				<div slot="imageContent">
					<ui5-avatar shape="Square" initials="ABC" color-scheme="Accent2"></ui5-avatar>
				</div>
			</ui5-li>
			<ui5-li> Avatar inside imageContent slot
				<div slot="imageContent">
					<ui5-avatar>
						<img src="./img/woman_avatar_5.png" alt="Woman image">
					</ui5-avatar>
				</div>
			</ui5-li>
		</ui5-list>
	</div>
`;

export const Template7 = () => html`
<h3>List in Delete Mode</h3>
	<div class="snippet">
		<ui5-list id="myList5" class="full-width" mode="Delete" header-text="Note: The list items removal is up to application developers">
			<ui5-li>Argentina</ui5-li>
			<ui5-li>Bulgaria</ui5-li>
			<ui5-li>China</ui5-li>
			<ui5-li>Denmark
				<div slot="deleteButton">
					<ui5-button>Custom Delete Button</ui5-button>
				</div>
			</ui5-li>
		</ui5-list>
	</div>
`;

export const Template8 = () => html`
<h3>List with No Data</h3>
	<div class="snippet">
		<ui5-list class="full-width" header-text="Products" no-data-text="No Data Available" separators="None"></ui5-list>
	</div>
`;

export const Template9 = () => html`
<h3>List Item Separation Types</h3>
	<div class="snippet">
		<ui5-list header-text="No separators" separators="None" class="full-width">
			<ui5-li icon="product">Item #1</ui5-li>
			<ui5-li icon="product">Item #2</ui5-li>
			<ui5-li icon="product">Item #3</ui5-li>
		</ui5-list>
		<ui5-list header-text="Inner separators" separators="Inner" class="full-width">
			<ui5-li icon="shipping-status">Devilered</ui5-li>
			<ui5-li icon="shipping-status">Pending</ui5-li>
			<ui5-li icon="shipping-status">Declined</ui5-li>
		</ui5-list>
	</div>
`;