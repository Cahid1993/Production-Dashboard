
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DailyProduction } from '../types';
import { TEA_BLEND_COLORS } from '../constants';

interface TeaBlendDistributionProps {
  data: DailyProduction[];
}

const TeaBlendDistribution: React.FC<TeaBlendDistributionProps> = ({ data }) => {
  const blendTotals = Object.keys(TEA_BLEND_COLORS).map(blend => ({
    name: blend,
    value: data.reduce((acc, day) => acc + (day[blend as keyof DailyProduction] as number), 0),
  }));

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6 h-96">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Tea Blend Distribution (Weekly)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={blendTotals}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {blendTotals.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={TEA_BLEND_COLORS[entry.name as keyof typeof TEA_BLEND_COLORS]} />
            ))}
          </Pie>
          <Tooltip 
             contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#e2e8f0' }}
             formatter={(value: number) => `${value.toLocaleString()} Units`}
          />
          <Legend wrapperStyle={{ color: '#e2e8f0', paddingTop: '20px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeaBlendDistribution;
