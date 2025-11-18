sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/m/routing/Router"
], function (Controller, ODataModel, Router) {
    "use strict";

    return Controller.extend("greentrack.controller.Vehicles", {
        onInit: function () {
            // Initialize the OData model
            var oModel = this.getOwnerComponent().getModel();
            this.getView().setModel(oModel);
        },

        onNavToGreenTrack: function () {
            // Navigate to the GreenTrack view
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteGreen-Track");
        }
    });
});