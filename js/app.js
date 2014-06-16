sap.ui.localResources("view");
sap.ui.localResources("model");
sap.ui.localResources("app");
sap.ui.localResources("i18n");

jQuery.sap.require("app.Component");

//Create app component and place at dom element with id=root
new sap.ui.core.ComponentContainer({
	name: "app"
}).placeAt("root");