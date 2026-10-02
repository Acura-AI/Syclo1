export interface PropertyEnquiryForm {
  name: string;
  company: string;
  phone: string;
  location: string;
  propertyType: string;
  approxValue: string;
  message: string;
}

export type PropertyCategory = 
  | 'Residential Apartments'
  | 'Luxury Villas & Penthouses'
  | 'Commercial & Retail'
  | 'Plots & Land Developments'
  | 'Builder Floors'
  | 'Entire Project Inventory';

export interface SectorDetail {
  id: string;
  title: string;
  role: string;
  inventoryChallenge: string;
  sycloSolution: string;
  typicalInventory: string;
}
