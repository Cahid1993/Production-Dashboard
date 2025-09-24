import React from 'react';
import { Product } from '../types';

interface InventoryStatusProps {
  products: Product[];
}

const InventoryStatus: React.FC<InventoryStatusProps> = ({ products }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Inventory Status</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-600">
            <tr>
              <th className="p-3 text-sm font-semibold text-slate-400 min-w-[250px]">Product</th>
              <th className="p-3 text-sm font-semibold text-slate-400 text-right">Price</th>
              <th className="p-3 text-sm font-semibold text-slate-400 text-right">Total Inventory</th>
              <th className="p-3 text-sm font-semibold text-slate-400 text-right">Total Requested</th>
              <th className="p-3 text-sm font-semibold text-slate-400 text-right">Total Available</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.productId} className={`border-b border-slate-700 ${index === products.length - 1 ? 'border-none' : ''}`}>
                <td className="p-3">
                  <div className="flex items-center">
                    <img src={product.imageUrl} alt={product.productName} className="w-10 h-10 rounded-md mr-4 object-cover" />
                    <div>
                      <p className="font-medium text-slate-200">{product.productName}</p>
                      <p className="text-xs text-slate-500 font-mono">{product.productId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-right font-mono text-slate-300">${product.price.toFixed(2)}</td>
                <td className="p-3 text-right font-mono text-slate-300">{product.totalInventory.toLocaleString()}</td>
                <td className="p-3 text-right font-mono text-slate-300">{product.totalRequested.toLocaleString()}</td>
                <td className="p-3 text-right font-mono text-emerald-400 font-bold">{product.totalAvailable.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryStatus;