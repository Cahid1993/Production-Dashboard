import React from 'react';
import { RawMaterial } from '../types';

interface ResourceUtilizationProps {
  materials: RawMaterial[];
}

const ResourceUtilization: React.FC<ResourceUtilizationProps> = ({ materials }) => {
  const getBarColor = (percentage: number) => {
    if (percentage > 90) return 'bg-red-500';
    if (percentage > 70) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Raw Material Utilization</h2>
      <div className="space-y-4">
        {materials.map(material => {
          const utilization = (material.usedStock / material.totalStock) * 100;
          return (
            <div key={material.id}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-300">{material.name}</span>
                <span className="text-sm font-mono text-slate-400">
                  {material.usedStock.toLocaleString()} / {material.totalStock.toLocaleString()} {material.unit}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(utilization)}`}
                  style={{ width: `${utilization}%` }}
                  aria-valuenow={utilization}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                  aria-label={`${material.name} utilization`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceUtilization;