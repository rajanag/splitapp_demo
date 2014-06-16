sap.ui.jsview("view.State", {
	
	getControllerName : function () {
		return "view.State";
	},
	
	createContent : function(oController) {
		
		// create a simple matrix layout
		var oLayout = new sap.ui.commons.layout.MatrixLayout({
		        id : "statelyt",
		        layoutFixed : true,
		        width : '50%',
		    	columns : 2,
		        });
		
		var oLabel = new sap.ui.commons.Label("lState",{
           text: "State Name",
           width: "100%"
		});
		
		var oTF = new sap.ui.commons.TextField("tfState", {
			tooltip: "State",
			width: "100%"
		});
		
		oLabel.setLabelFor(oTF);
		
		oLayout.createRow(oLabel,oTF);
		
		var oButton = new sap.m.Button({
			id : "save", // sap.ui.core.ID
			text : "Save", // string
			icon : "sap-icon://save", // sap.ui.core.URI
			iconFirst : true, // boolean
			tooltip : "Save", // sap.ui.core.TooltipBase
			press : [ oController.saveState, this ]
		});
		

		//return the page to ui when called
		return new sap.m.Page({
			title: "Register a new State",
			showNavButton: "{device>/isPhone}",
			content: [oLayout],
            footer: new sap.m.Bar({
                contentRight: [oButton]
            })
		});
	}
});