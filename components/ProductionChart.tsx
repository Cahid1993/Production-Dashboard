
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DailyProduction } from '../types';
import { TEA_BLEND_COLORS } from '../constants';

interface ProductionChartProps {
  data: DailyProduction[];
}

const ProductionChart: React.FC<ProductionChartProps> = ({ data }) => {
  const [hiddenSeries, setHiddenSeries] = useState<string[]>([]);

  const handleLegendClick = (data: any) => {
    const { dataKey } = data;
    if (hiddenSeries.includes(dataKey)) {
      setHiddenSeries(hiddenSeries.filter(key => key !== dataKey));
    } else {
      setHiddenSeries([...hiddenSeries, dataKey]);
    }
  };

  const renderLegendText = (value: string) => {
    const isHidden = hiddenSeries.includes(value);
    return (
      <span style={{ color: isHidden ? '#64748b' : '#e2e8f0', cursor: 'pointer', transition: 'color 0.2s' }}>
        {value}
      </span>
    );
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 h-96">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Weekly Production Volume</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="day" tick={{ fill: '#94a3b8' }} stroke="#64748b" />
          <YAxis tick={{ fill: '#94a3b8' }} stroke="#64748b" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
            cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }} 
            onClick={handleLegendClick}
            formatter={renderLegendText}
          />
          {Object.keys(TEA_BLEND_COLORS).map(blend => (
             <Bar 
                key={blend} 
                dataKey={blend} 
                stackId="a" 
                fill={TEA_BLEND_COLORS[blend as keyof typeof TEA_BLEND_COLORS]} 
                hide={hiddenSeries.includes(blend)}
              />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductionChart;
