sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/Controller"
], function (UIComponent, Controller) {
    "use strict";

    return Controller.extend("greentrack.controller.App", {
        onInit: function () {
            // Initialization code
        },

        onNavToDashboard: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDashboard"); // Ensure the route name matches the manifest
        },
        onNavToVehicles: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteVehicles"); // Ensure the route name matches the manifest
        }
    });
});