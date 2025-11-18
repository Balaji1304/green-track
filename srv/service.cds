using { GreenTrack as my } from '../db/schema.cds';

@path: '/service/greenTrack'
@requires: 'authenticated-user'
service greenTrackSrv {
  @odata.draft.enabled
  entity Addresses as projection on my.Address;

  @odata.draft.enabled
  entity Drivers as projection on my.Driver;

  @odata.draft.enabled
  entity Certificates as projection on my.Certificat;

  @odata.draft.enabled
  entity Vehicles as projection on my.Vehicle;

  @odata.draft.enabled
  entity Articles as projection on my.Article;

  @odata.draft.enabled
  entity OrderItems as projection on my.OrderItem;

  @odata.draft.enabled
  entity PurchaseOrderOrders as projection on my.PurchaseOrderOrder;

  @odata.draft.enabled
  entity PurchaseOrders as projection on my.PurchaseOrder;

  @odata.draft.enabled
  entity Customers as projection on my.Customer;

  @odata.draft.enabled
  entity VehicleTypes as projection on my.VehicleType;

  @odata.draft.enabled
  entity RoutePlanners as projection on my.RoutePlanner;
}