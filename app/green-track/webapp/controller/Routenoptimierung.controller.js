sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller"
], function (UIComponent, History, Controller) {
    "use strict";

    return Controller.extend("greentrack.controller.Routenoptimierung", {
        onInit: function () {
            // Initialization code
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteDashboard", {}, true);
            }
        }
    });
});