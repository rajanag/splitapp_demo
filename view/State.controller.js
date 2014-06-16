sap.ui.controller("view.State", {

    onInit: function() {
        this.bus = sap.ui.getCore().getEventBus();
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    },
    
    saveState: function(oEvent) {
		
    	var oModelSave = new sap.ui.model.json.JSONModel();
    	
    	vState : sap.ui.getCore().byId('tfState').data();
    	
    	oModelSave.loadData('http://mydomain/saveState.php?state=vState', 'POST');
	}
    
});