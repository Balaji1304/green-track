namespace GreenTrack;

entity Article {
    ID   : Integer @sap.cds.auto.increment: true;
    name : String(100);
}

entity OrderItem {
    ID     : Integer @sap.cds.auto.increment: true;
    order  : Association to PurchaseOrder;
    article: Association to Article;
}

entity PurchaseOrderOrder {
    ID    : Integer @sap.cds.auto.increment: true;
    order : Association to PurchaseOrder;
}

entity PurchaseOrder {
    ID                 : Integer @sap.cds.auto.increment: true;
    orderItems         : Association to many OrderItem;
    purchaseOrderOrder : Association to many PurchaseOrderOrder;
    customer           : Association to Customer;
}

entity Customer {
    ID      : Integer @sap.cds.auto.increment: true;
    name    : String(100);
    address : Association to Address;
}

entity Address {
    ID       : Integer @sap.cds.auto.increment: true;
    street   : String(100);
    houseNo  : String(10);
    city     : String(100);
    postCode : String(5);
    country  : String(100);
    customer : Association to Customer;
}

entity Driver {
    ID          : Integer @sap.cds.auto.increment: true;
    name        : String(100);
    certificates: Association to many Certificat;
}

entity Certificat {
    ID      : Integer @sap.cds.auto.increment: true;
    name    : String(100);
    vehicle : Association to Vehicle;
    driver  : Association to Driver;
}

entity Vehicle {
    ID                 : Integer @sap.cds.auto.increment: true;
    licencePlate       : String(100);
    co_2EmissionsFull  : Decimal(10, 2);
    co_2EmissionsEmpty : Decimal(10, 2);
    maxCapacity        : Decimal(10, 2);
    certificates       : Association to many Certificat;
    vehicleType        : Association to VehicleType;
}

entity VehicleType {
    ID       : Integer @sap.cds.auto.increment: true;
    name     : String(100);
    vehicles : Association to many Vehicle;
}

entity RoutePlanner {
    ID       : Integer @sap.cds.auto.increment: true;
    vehicle  : Association to Vehicle;
}