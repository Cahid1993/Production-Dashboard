
import React from 'react';
import { ProductionLine } from '../types';
import { STATUS_COLORS } from '../constants';

interface ProductionLineStatusProps {
  lines: ProductionLine[];
}

const ProductionLineStatus: React.FC<ProductionLineStatusProps> = ({ lines }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Production Line Status</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-600">
            <tr>
              <th className="p-3 text-sm font-semibold text-slate-400">Line</th>
              <th className="p-3 text-sm font-semibold text-slate-400">Status</th>
              <th className="p-3 text-sm font-semibold text-slate-400">Current Blend</th>
              <th className="p-3 text-sm font-semibold text-slate-400 text-right">Output (Units/hr)</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line, index) => (
              <tr key={line.id} className={`border-b border-slate-700 ${index === lines.length - 1 ? 'border-none' : ''}`}>
                <td className="p-3 font-medium text-slate-200">{line.name}</td>
                <td className="p-3">
                  <span className="flex items-center">
                    <span className={`h-2.5 w-2.5 rounded-full mr-2 ${STATUS_COLORS[line.status]}`}></span>
                    {line.status}
                  </span>
                </td>
                <td className="p-3 text-slate-300">{line.currentBlend}</td>
                <td className="p-3 text-right font-mono text-emerald-400">{line.outputPerHour.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionLineStatus;
