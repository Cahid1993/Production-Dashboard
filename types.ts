export interface DailyProduction {
  day: string;
  'Earl Grey': number;
  'Green Tea': number;
  'Chamomile': number;
  'English Breakfast': number;
}

export interface Product {
  productId: string;
  productName: string;
  price: number;
  imageUrl: string;
  totalInventory: number;
  totalRequested: number;
  totalAvailable: number;
}

export interface RawMaterial {
  id: string;
  name: string;
  totalStock: number;
  usedStock: number;
  unit: string;
}

export interface ProductionData {
  totalProductionToday: number;
  dailyProduction: DailyProduction[];
  products: Product[];
  rawMaterials: RawMaterial[];
}

// FIX: Added missing type definitions to resolve import errors.
export type ProductionLineStatusType = 'Running' | 'Idle' | 'Maintenance' | 'Error';

export interface ProductionLine {
  id: string;
  name: string;
  status: ProductionLineStatusType;
  currentBlend: string;
  outputPerHour: number;
}

export type AlertLevel = 'Info' | 'Warning' | 'Critical';

export interface Alert {
  id: string;
  level: AlertLevel;
  lineId: string;
  message: string;
  timestamp: string;
}