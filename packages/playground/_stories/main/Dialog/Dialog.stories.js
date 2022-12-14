import { action } from "@storybook/addon-actions";
import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import argTypes from "./argTypes.js";

export default {
    title: "Components/Dialog",
    component: "ui5-dialog",
    subcomponents: {},
    argTypes,
};


export const Template0 = () => html`
<h3>Basic Dialog</h3>
	<div class="snippet">
		<ui5-button id="openDialogButton" design="Emphasized">Show Dialog</ui5-button>
		<ui5-dialog id="hello-dialog" header-text="Register Form">
			<section class="login-form">
				<div>
					<ui5-label for="username" required="">Username: </ui5-label>
					<ui5-input id="username"></ui5-input>
				</div>
				<div>
					<ui5-label for="password" required="">Password: </ui5-label>
					<ui5-input id="password" type="Password" value-state="Error"></ui5-input>
				</div>
				<div>
					<ui5-label for="email" type="Email" required="">Email: </ui5-label>
					<ui5-input id="email"></ui5-input>
				</div>
				<div>
					<ui5-label for="address">Address: </ui5-label>
					<ui5-input id="address"></ui5-input>
				</div>
			</section>
			<div slot="footer" style="display: flex; align-items: center;padding: .5rem">
				<div style="flex: 1;"></div>
				<ui5-button id="closeDialogButton" design="Emphasized">Register</ui5-button>
			</div>
		</ui5-dialog>
		<script>
			var dialogOpener = document.getElementById("openDialogButton");
			var dialog = document.getElementById("hello-dialog");
			var dialogCloser = document.getElementById("closeDialogButton");
			dialogOpener.accessibilityAttributes = {
				hasPopup: "dialog",
				controls: dialog.id,
			}
			dialogOpener.addEventListener("click", function() {
				dialog.show();
			});
			dialogCloser.addEventListener("click", function() {
				dialog.close();
			});
		</script>
	</div>
`;

export const Template1 = () => html`
<h3>Draggable and Resizable Dialog</h3>
	<div class="snippet">
		<ui5-button id="resizable-draggable-open">Open Draggable/Resizable dialog</ui5-button>
		<ui5-dialog id="resize-draggable-dialog" header-text="Draggable/Resizable dialog" resizable="" draggable="">
			<p>Resize this dialog by dragging it by its resize handle.</p>
			<p>This feature available only on Desktop.</p>
			<p>Move this dialog around the screen by dragging it by its header.</p>
			<p>This feature available only on Desktop.</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="resizable-drggable-close" design="Emphasized">OK</ui5-button>
			</div>
		</ui5-dialog>
	</div>
	<script>
		var dialog2 = document.getElementById("resize-draggable-dialog");
		var dialogOpener2 = document.getElementById("resizable-draggable-open");
		var dialogCloser2 = document.getElementById("resizable-drggable-close");
		dialogOpener2.accessibilityAttributes = {
			hasPopup: "dialog",
			controls: dialog2.id,
		}
		dialogOpener2.addEventListener("click", function() {
			dialog2.show();
		});
		dialogCloser2.addEventListener("click", function() {
			dialog2.close();
		});
	</script>
`;

export const Template2 = () => html`
<h3>Dialog with SAP Fiori Styled Footer</h3>
	<div class="snippet">
		<ui5-button id="fiori-footer">Open dialog</ui5-button>
		<ui5-dialog id="fiori-footer-dialog" header-text="SAP Fiori Styled Footer">
			<p>Adding custom styles to achieve the look and feel of a SAP Fiori footer</p>
			<div slot="footer" style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
				<ui5-button design="Emphasized" style="min-width: 4rem;">OK</ui5-button>
				<ui5-button id="fiori-close" style="margin: 0 0 0 0.5rem; min-width: 4rem;">Close</ui5-button>
			</div>
		</ui5-dialog>
	</div>
	<script>
		var dialogOpener3 = document.getElementById("fiori-footer");
		var dialog3 = document.getElementById("fiori-footer-dialog");
		var dialogCloser3 = document.getElementById("fiori-close");
		dialogOpener3.addEventListener("click", function() {
			dialog3.show();
		});
		dialogCloser3.addEventListener("click", function() {
			dialog3.close();
		});
	</script>
`;

export const Template3 = () => html`
<h3>Dialogs with various state properties</h3>
	<div class="snippet">
		<ui5-button id="error-state">Open error state dialog</ui5-button>
		<ui5-button id="information-state">Open information state dialog</ui5-button>
		<ui5-button id="success-state">Open success state dialog</ui5-button>
		<ui5-button id="warning-state">Open warning state dialog</ui5-button>
		<ui5-dialog id="error-state-dialog" header-text="Error" state="Error">
			<p>Error state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="error-close">Close</ui5-button>
			</div>
		</ui5-dialog>
		<ui5-dialog id="information-state-dialog" header-text="Information" state="Information">
			<p>Information state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="information-close">Close</ui5-button>
			</div>
		</ui5-dialog>
		<ui5-dialog id="success-state-dialog" header-text="Success" state="Success">
			<p>Success state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="success-close">Close</ui5-button>
			</div>
		</ui5-dialog>
		<ui5-dialog id="warning-state-dialog" header-text="Warning" state="Warning">
			<p>Warning state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="warning-close">Close</ui5-button>
			</div>
		</ui5-dialog>
	</div>
	<script>
		var dialogOpenerError = document.getElementById("error-state");
		var dialogError = document.getElementById("error-state-dialog");
		var dialogCloserError = document.getElementById("error-close");
		dialogOpenerError.addEventListener("click", function () {
			dialogError.show();
		});
		dialogCloserError.addEventListener("click", function () {
			dialogError.close();
		});
		var dialogOpenerInfo = document.getElementById("information-state");
		var dialogInfo = document.getElementById("information-state-dialog");
		var dialogCloserInfo = document.getElementById("information-close");
		dialogOpenerInfo.addEventListener("click", function () {
			dialogInfo.show();
		});
		dialogCloserInfo.addEventListener("click", function () {
			dialogInfo.close();
		});
		var dialogOpenerSuccess = document.getElementById("success-state");
		var dialogSuccess = document.getElementById("success-state-dialog");
		var dialogCloserSuccess = document.getElementById("success-close");
		dialogOpenerSuccess.addEventListener("click", function () {
			dialogSuccess.show();
		});
		dialogCloserSuccess.addEventListener("click", function () {
			dialogSuccess.close();
		});
		var dialogOpenerWarning = document.getElementById("warning-state");
		var dialogWarning = document.getElementById("warning-state-dialog");
		var dialogCloserWarning = document.getElementById("warning-close");
		dialogOpenerWarning.addEventListener("click", function () {
			dialogWarning.show();
		});
		dialogCloserWarning.addEventListener("click", function () {
			dialogWarning.close();
		});
	</script>
`;