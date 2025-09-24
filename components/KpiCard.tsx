import React from 'react';

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 shadow-lg transition-transform hover:scale-105 duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="text-3xl font-bold text-slate-100">{value}</p>
          {description && (
            <p className="text-sm text-slate-500 mt-1">{description}</p>
          )}
        </div>
        <div className="text-emerald-400 bg-emerald-900/50 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;