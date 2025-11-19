sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/Popover"
], function (UIComponent, Controller, MessageBox, Popover) {
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
        },

        onNavToVehicles: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteVehicles"); // Ensure the route name matches the manifest
        },

        onNotificationPress: function (oEvent) {
            const oButton = oEvent.getSource();
            const oPopover = this.byId("notificationPopover");
            oPopover.openBy(oButton);
        },

        onItemClose: function (oEvent) {
            const oItem = oEvent.getSource();
            oItem.destroy();
        },

        onAcceptPress: function () {
            MessageBox.success("Accepted!");
        },

        onRejectPress: function () {
            MessageBox.error("Rejected!");
        },

        onListItemPress: function (oEvent) {
            const oItem = oEvent.getSource();
            MessageBox.information(`Item pressed: ${oItem.getTitle()}`);
        }
    });
});