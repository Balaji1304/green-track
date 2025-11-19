sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("greentrack.controller.Vehicles", {

        onInit: function () {
            // Hardcoded Vehicle Data - translated to German
            var aVehicles = [
                {
                    licensePlate: "VH-001",
                    vehicleType: "Elektro-Transporter",
                    subtitle: "Batterie-Transporter",
                    tonnage: "3.5 t",
                    fuelType: "Elektrisch",
                    emissions: "0 kg CO₂",
                    certificates: 2,
                    status: "Aktiv",
                    statusState: "Success" 
                },
                {
                    licensePlate: "VH-002",
                    vehicleType: "Diesel-LKW",
                    subtitle: "12t LKW",
                    tonnage: "12 t",
                    fuelType: "Verbrenner",
                    emissions: "245 kg CO₂",
                    certificates: 4,
                    status: "Wartung",
                    statusState: "Warning" 
                },
                {
                    licensePlate: "VH-004",
                    vehicleType: "Hybrid-LKW",
                    subtitle: "Hybrid 10t LKW",
                    tonnage: "10 t",
                    fuelType: "Hybrid",
                    emissions: "140 kg CO₂",
                    certificates: 3,
                    status: "Inaktiv",
                    statusState: "Error"
                },
                {
                    licensePlate: "VH-005",
                    vehicleType: "Elektro-Transporter",
                    subtitle: "Leichttransport",
                    tonnage: "3.0 t",
                    fuelType: "Elektrisch",
                    emissions: "0 kg CO₂",
                    certificates: 1,
                    status: "Aktiv",
                    statusState: "Success"
                },
                {
                    licensePlate: "VH-006",
                    vehicleType: "Diesel-LKW",
                    subtitle: "Schwertransport",
                    tonnage: "15 t",
                    fuelType: "Verbrenner",
                    emissions: "300 kg CO₂",
                    certificates: 5,
                    status: "Aktiv",
                    statusState: "Success"
                }
            ];

            // Create a JSON Model and set the data
            var oModel = new JSONModel({
                Vehicles: aVehicles
            });
            this.getView().setModel(oModel);
        },

        onNavToGreenTrack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteGreen-Track");
        },
        
        onSearch: function (oEvent) {
            // Implement search/filter logic here
        },
        
        onFilterPress: function () {
            // Implement filter dialog/popover logic here
        }
    });
});