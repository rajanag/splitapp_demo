sap.ui.jsview("view.Menu", {

    getControllerName: function() {
        return "view.Menu";
    },

    createContent: function(oController) {

        var oListTemplate = new sap.m.StandardListItem({
            title: "{title}",
            icon: "{icon}",
            description: "{description}",
            type: sap.m.ListType.Navigation,
            customData: new sap.ui.core.CustomData({
                key: "targetPage",
                value: "{targetPage}"
            })
        });

        var oList = new sap.m.List({
            selectionChange: [oController.doNavOnSelect, oController],
        	mode: sap.m.ListMode.SingleSelectMaster
        });
        oList.bindAggregation("items", "/Menu", oListTemplate);


        return new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [new sap.m.Image("chintana", {
                    src: 'sap-icon://home',
                    width: "35px",
                    height: "35px"
                })],
                contentMiddle: [new sap.m.Text({
                    text: "{i18n>REGISTRATION_DASHBOARD}"
                })]
            }),
            content: [oList],
            footer: new sap.m.Bar({
                contentMiddle: [new sap.m.Link("myproLink", {
                    text: "Chintana",
                    href: "http://blog.mypro.de/tag/ui5boilerplate/"
                })]
            })
        });
    }

});