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

        onNavToFahrzeuge: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteFahrzeuge"); // Ensure the route name matches the manifest
        },
        onNavToRoutenoptimierung: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteRoutenoptimierung"); // Ensure the route name matches the manifest
        },
        onNavToKontakte: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteKontakte"); // Ensure the route name matches the manifest
        }
    });
});