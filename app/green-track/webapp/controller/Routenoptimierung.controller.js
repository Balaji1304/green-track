sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/BusyIndicator",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, JSONModel, BusyIndicator, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("greentrack.controller.Routenoptimierung", {

        onInit: function () {
            // Data Model for the Simulation
            var oData = {
                config: {
                    fleet: "mix", // Default: Auto-Split
                    startPoint: "Berlin, Logistikzentrum Süd",
                    orderCount: 0
                },
                results: {
                    // OPTION A: The "bad" reference (Diesel LKW)
                    optionA: {
                        visible: false, // Hidden until calculated
                        cost: "0.00",
                        status: "",
                        statusState: "None", 
                        co2: "-",
                        co2State: "None",
                        distance: "0 km"
                    },
                    // OPTION B: The "good" result (Green Split)
                    optionB: {
                        visible: false,
                        cost: "0.00",
                        savings: "0.00",
                        percent: 0,
                        co2: "-",
                        distance: "0 km"
                    }
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "view");
        },

        onNavBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDashboard", {}, true);
        },

        /**
         * Updates the order count live as the user selects items.
         * This ensures we only calculate for what is actually selected.
         */
        onOrdersSelected: function(oEvent) {
            var oModel = this.getView().getModel("view");
            var aSelectedItems = oEvent.getSource().getSelectedItems();
            var iCount = aSelectedItems.length;

            oModel.setProperty("/config/orderCount", iCount);
            
            // Reset results immediately if selection changes to show that new calculation is needed
            oModel.setProperty("/results/optionA/visible", false);
            oModel.setProperty("/results/optionB/visible", false);
        },

        /**
         * The "Magic" Calculation Simulation
         */
        onCalculate: function () {
            var oModel = this.getView().getModel("view");
            var sFleet = oModel.getProperty("/config/fleet");
            var iOrderCount = oModel.getProperty("/config/orderCount");

            // 1. Validation: User must select orders
            if (iOrderCount <= 0) {
                MessageBox.warning("Bitte wählen Sie zuerst mindestens einen Auftrag aus.");
                return;
            }

            // 2. Simulation Effect
            BusyIndicator.show(0);

            setTimeout(function () {
                BusyIndicator.hide();

                // --- CALCULATION LOGIC ---
                
                // Base factors per order
                var nBaseCost = 42.50; // EUR
                var nBaseCO2 = 15.5;   // kg
                var nBaseDist = 18.0;  // km

                // Random jitter (0.9 to 1.1) to make numbers look real/different every time
                var nJitter = 0.9 + (Math.random() * 0.2);

                // --- OPTION A: Diesel Truck (Inefficient) ---
                var nCostA = (iOrderCount * nBaseCost * nJitter);
                var nCO2A = (iOrderCount * nBaseCO2 * nJitter);
                var nDistA = (iOrderCount * nBaseDist * 0.95); // Trucks drive direct main roads

                oModel.setProperty("/results/optionA", {
                    visible: true,
                    cost: nCostA.toFixed(2),
                    status: "Hohe Emissionen",
                    statusState: "Error", // Red
                    co2: nCO2A.toFixed(1) + " kg (Kritisch)",
                    co2State: "Error",
                    distance: nDistA.toFixed(1) + " km"
                });

                // --- OPTION B: Smart Split (Efficient) ---
                if (sFleet === "mix") {
                    // Scenario: Auto-Split (Huge savings)
                    
                    var nSavingsRate = 0.38; // 38% Cost savings
                    var nCO2Rate = 0.15;     // 85% CO2 reduction (Electric)

                    var nCostB = nCostA * (1 - nSavingsRate);
                    var nCO2B = nCO2A * nCO2Rate;
                    var nSavings = nCostA - nCostB;

                    oModel.setProperty("/results/optionB", {
                        visible: true,
                        cost: nCostB.toFixed(2),
                        savings: nSavings.toFixed(2),
                        percent: Math.round(nSavingsRate * 100),
                        co2: nCO2B.toFixed(1) + " kg (Eco)",
                        distance: (nDistA * 1.1).toFixed(1) + " km" // Bikes drive slightly more distance but cheaper
                    });

                    MessageToast.show("Optimale Split-Route für " + iOrderCount + " Aufträge berechnet.");

                } else {
                    // Scenario: Only Truck (No Split)
                    // Slight optimization of Option A, but hide Option B
                    oModel.setProperty("/results/optionA/status", "Standard LKW");
                    oModel.setProperty("/results/optionA/statusState", "Warning"); // Orange
                    oModel.setProperty("/results/optionA/co2", nCO2A.toFixed(1) + " kg");
                    oModel.setProperty("/results/optionA/co2State", "Warning");

                    oModel.setProperty("/results/optionB/visible", false);
                    
                    MessageToast.show("LKW-Route für " + iOrderCount + " Aufträge berechnet.");
                }

            }, 1200); // 1.2 seconds loading time
        }
    });
});