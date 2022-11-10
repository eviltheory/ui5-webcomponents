import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import argTypes from "./argTypes.js";

export default {
    title: "Components/MediaGallery",
    component: "ui5-media-gallery",
    subcomponents: {'MediaGalleryItem' : 'ui5-media-gallery-item'},
    argTypes,
};


export const Template0 = () => html`
<h3>Usage</h3>
	<div class="snippet">
		<ui5-media-gallery show-all-thumbnails="">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template1 = () => html`
<h3>MediaGallery with vertical layout</h3>
	<div class="snippet">
		<ui5-media-gallery show-all-thumbnails="" layout="Vertical">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template2 = () => html`
<h3>MediaGallery with thumbnails on the right</h3>
	<div class="snippet">
		<ui5-media-gallery show-all-thumbnails="" layout="Horizontal" menu-horizontal-align="Right">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template3 = () => html`
<h3>MediaGallery item with separate image for its thumbnail</h3>
	<div class="snippet">
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
				<img src="../../../assets/images/HT-1000-small.jpg" slot="thumbnail">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template4 = () => html`
<h3>MediaGallery item with video content</h3>
	<div class="snippet">
		<ui5-media-gallery>
			<ui5-media-gallery-item layout="Wide">
				<iframe src="https://www.youtube.com/embed/GxGZG2fv6Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
				<img src="../../../assets/images/sap-logo-square.svg" slot="thumbnail" alt="SAP Video">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template5 = () => html`
<h3>MediaGallery with disabled content</h3>
	<div class="snippet">
		<ui5-media-gallery>
			<ui5-media-gallery-item disabled="">
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template6 = () => html`
<h3>MediaGallery with initially selected item</h3>
	<div class="snippet">
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item selected="">
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	</div>
`;


export const Template7 = () => html`
<h3>MediaGallery with thumbnails overflow</h3>
	<div class="snippet">
		<div class="container">
			<ui5-media-gallery id="mediaGallery" interactive-display-area="">
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1000.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1010.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1022.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1030.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-2002.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-citem>
					<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-citem></ui5-media-gallery>
			<div class="details">
				<ui5-title level="H1">Item Details</ui5-title>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam lectus, tristique semper mi et, faucibus viverra metus. Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat. Morbi congue diam id enim porttitor, sit amet placerat nunc pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam erat volutpat. Vestibulum et enim sit amet ipsum tincidunt aliquet nec in dui. Sed dui est, hendrerit non sollicitudin quis, venenatis vel libero. Suspendisse sit amet lorem posuere, egestas neque eget, sodales ipsum.
				Donec sollicitudin leo ut risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio, viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi. Aliquam fermentum nec felis sit amet tristique. Nunc luctus a lacus non semper. Curabitur euismod tellus id massa mattis, in consectetur mi luctus. Mauris dignissim efficitur lobortis. Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
			</div>
		</div>
		<ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
			<ui5-bar design="Header" slot="header">
				<ui5-label>Item</ui5-label>
			</ui5-bar>
			<ui5-media-gallery show-all-thumbnails="">
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1000.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1010.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1022.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-1030.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-2002.jpg">
				</ui5-media-gallery-item>
				<ui5-media-gallery-item>
					<img src="../../../assets/images/HT-2026.jpg">
				</ui5-media-gallery-item>
			</ui5-media-gallery>
			<div slot="footer" class="dialog-footer">
				<div style="flex: 1;"></div>
				<ui5-button id="closeDialogButton">Close</ui5-button>
			</div>
		</ui5-dialog>
		<style>
			@media (min-width: 1024px) {
				.container {
					display:grid;
					gap: 1rem;
					grid-template-columns: 1fr 1fr;
				}
			}
		</style>
		<script>
			closeDialogButton.addEventListener("click", function() {
				mediaGalleryDialog.close();
			});
			mediaGallery.addEventListener("overflow-click", function(event) {
				mediaGalleryDialog.show();
			});
			mediaGallery.addEventListener("display-area-click", function(event) {
				mediaGalleryDialog.show();
			});
		</script>
	</div>
`;
Template7.parameters = {
    docs: {
        // Opt-out of inline rendering
        inlineStories: false,
    },
};
		