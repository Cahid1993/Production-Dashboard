import { ProductionData, Product, RawMaterial } from '../types';

const TEA_BLENDS = ['Earl Grey', 'Green Tea', 'Chamomile', 'English Breakfast'];

const generateInitialData = (): ProductionData => {
  const dailyProduction = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
    const dayData: { day: string; [key: string]: number | string } = { day };
    TEA_BLENDS.forEach(blend => {
      dayData[blend] = 2000 + Math.floor(Math.random() * 1500);
    });
    return dayData as any;
  });

  const products: Product[] = [
    {
      productId: 'EG-001',
      productName: 'Classic Earl Grey',
      price: 12.99,
      imageUrl: 'https://placehold.co/40x40/8884d8/FFF?text=EG',
      totalInventory: 5000,
      totalRequested: 1200,
      totalAvailable: 3800,
    },
    {
      productId: 'GT-001',
      productName: 'Sencha Green Tea',
      price: 15.49,
      imageUrl: 'https://placehold.co/40x40/82ca9d/FFF?text=GT',
      totalInventory: 8000,
      totalRequested: 3500,
      totalAvailable: 4500,
    },
    {
      productId: 'CH-001',
      productName: 'Calming Chamomile',
      price: 10.99,
      imageUrl: 'https://placehold.co/40x40/ffc658/FFF?text=CH',
      totalInventory: 6500,
      totalRequested: 2100,
      totalAvailable: 4400,
    },
    {
      productId: 'EB-001',
      productName: 'English Breakfast',
      price: 11.99,
      imageUrl: 'https://placehold.co/40x40/ff8042/FFF?text=EB',
      totalInventory: 7200,
      totalRequested: 4800,
      totalAvailable: 2400,
    },
  ];
  
  const rawMaterials: RawMaterial[] = [
    { id: 'mat-01', name: 'Black Tea Leaves', totalStock: 1000, usedStock: 750, unit: 'kg' },
    { id: 'mat-02', name: 'Green Tea Leaves', totalStock: 1200, usedStock: 800, unit: 'kg' },
    { id: 'mat-03', name: 'Chamomile Flowers', totalStock: 500, usedStock: 460, unit: 'kg' },
    { id: 'mat-04', name: 'Bergamot Oil', totalStock: 200, usedStock: 120, unit: 'liters' },
    { id: 'mat-05', name: 'Sugar', totalStock: 2500, usedStock: 1500, unit: 'kg' },
  ];


  return {
    totalProductionToday: 15000 + Math.floor(Math.random() * 5000),
    dailyProduction,
    products,
    rawMaterials,
  };
};

let currentData = generateInitialData();

export const fetchProductionData = (): Promise<ProductionData> => {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => {
      // Simulate real-time updates
      currentData = {
        ...currentData,
        totalProductionToday: currentData.totalProductionToday + Math.floor(Math.random() * 100),
        products: currentData.products.map(p => {
          const requestedChange = Math.floor(Math.random() * 20 - 5); // can also decrease
          const newRequested = Math.max(0, p.totalRequested + requestedChange);
          return {
              ...p,
              totalRequested: newRequested,
              totalAvailable: p.totalInventory - newRequested,
          };
        }),
        rawMaterials: currentData.rawMaterials.map(mat => {
            const usageIncrease = Math.floor(Math.random() * 5);
            const newUsedStock = Math.min(mat.totalStock, mat.usedStock + usageIncrease);
            return {
                ...mat,
                usedStock: newUsedStock,
            };
        }),
      };
      resolve(JSON.parse(JSON.stringify(currentData)));
    }, 500);
  });
};