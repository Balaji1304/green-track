sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
], function (Controller, JSONModel, History, MessageToast) {
    "use strict";

    return Controller.extend("greentrack.controller.Dashboard", {

        onInit: function () {
            // HARDCODED DATA MODEL
            var oDashboardData = {
                stats: {
                    openOrders: 12,
                    openOrdersState: "Warning",
                    todaysRoutes: 8,
                    fleetAvailability: 85, 
                    co2Saved: "3.450",
                    co2Target: 78 
                },
                
                fleetMix: [
                    { label: "Elektro", value: 55, color: "Good", displayValue: "55%" },
                    { label: "Diesel", value: 25, color: "Error", displayValue: "25%" },
                    { label: "Wasserstoff", value: 20, color: "Critical", displayValue: "20%" }
                ],

                orders: [
                    { 
                        id: "b5dc31f1", orderNum: "ORD-2009", customer: "Supermarkt Nord", 
                        address: "Industriestraße 12, Bochum", status: "New", statusState: "Error", 
                        items: 5, route: "Nicht zugewiesen" 
                    },
                    { 
                        id: "06464719", orderNum: "ORD-4633", customer: "Bio-Markt Mitte", 
                        address: "Westring 303, Herne", status: "Planned", statusState: "Warning", 
                        items: 12, route: "Route #R-102" 
                    },
                    { 
                        id: "0afee7d7", orderNum: "ORD-6945", customer: "Kaufhaus West", 
                        address: "Alleestraße 19, Bochum", status: "Shipped", statusState: "Success", 
                        items: 3, route: "Route #R-101 (Unterwegs)" 
                    },
                    { 
                        id: "148287a4", orderNum: "ORD-7715", customer: "Logistik Hub A", 
                        address: "Hafenstraße 5, Duisburg", status: "Delivered", statusState: "Success", 
                        items: 50, route: "Abgeschlossen" 
                    },
                    { 
                        id: "dd3ff82a", orderNum: "ORD-6321", customer: "Einzelhandel Müller", 
                        address: "Dorfstraße 2, Witten", status: "Cancelled", statusState: "None", 
                        items: 1, route: "-" 
                    }
                ]
            };

            var oModel = new JSONModel(oDashboardData);
            this.getView().setModel(oModel, "dashboard");
        },

        onNavBack: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteGreen-Track", {}, true);
        },

        onPressOrder: function(oEvent) {
            var sOrderNum = oEvent.getSource().getBindingContext("dashboard").getProperty("orderNum");
            MessageToast.show("Öffne Details für " + sOrderNum);
        },

        onRefresh: function() {
            MessageToast.show("Daten aktualisiert.");
        }
    });
});