sap.ui.jsview("view.App", {
	getControllerName: function(){
		return "view.App";
	},
	
	createContent: function(oController){
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		this.app = new sap.m.SplitApp();
		this.app.addMasterPage(sap.ui.jsview("Menu", "view.Menu"));
		
		this.app.addDetailPage(sap.ui.xmlview("Info", "view.Info"));
		this.app.addDetailPage(sap.ui.jsview("CoffeeList", "view.CoffeeList"));
		this.app.addDetailPage(sap.ui.jsview("State", "view.State"));
		
		this.app.toDetail("Info");
		this.app.toMaster("Menu");
		
		return new sap.m.Shell("Shell", {
			title: "Registration Link",
			showLogout: false,
			app: this.app/*,
			homeIcon: {
                'phone': 'sap-icon://home',
                'phone@2': 'sap-icon://home',
                'tablet': 'sap-icon://home',
                'tablet@2': 'sap-icon://home',
                'precomposed': false
			}*/
		});
	}
});