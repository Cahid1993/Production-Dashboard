import React from 'react';
import { useProductionData } from '../hooks/useProductionData';
import KpiCard from './KpiCard';
import ProductionChart from './ProductionChart';
import TeaBlendDistribution from './TeaBlendDistrubition';
import { Icons } from '../constants';
import InventoryStatus from './InventoryStatus';
import ResourceUtilization from './ResourceUtilization';

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useProductionData();

  if (isLoading) {
    return <div className="flex justify-center items-center h-96 text-slate-400">Loading Dashboard Data...</div>;
  }

  if (error || !data) {
    return <div className="flex justify-center items-center h-96 text-red-400">{error || 'An unexpected error occurred.'}</div>;
  }

  const totalInventoryAvailable = data.products.reduce((sum, product) => sum + product.totalAvailable, 0);

  return (
    <div className="max-w-screen-2xl mx-auto space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Production Today" value={`${data.totalProductionToday.toLocaleString()} Units`} icon={<Icons.Box />} />
        <KpiCard title="Inventory Available" value={`${totalInventoryAvailable.toLocaleString()} Units`} icon={<Icons.Box />} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductionChart data={data.dailyProduction} />
        </div>
        <div className="lg:col-span-1">
          <TeaBlendDistribution data={data.dailyProduction} />
        </div>
      </div>
      
      {/* Inventory & Resources */}
      <div className="grid grid-cols-1 gap-6">
        <InventoryStatus products={data.products} />
        <ResourceUtilization materials={data.rawMaterials} />
      </div>
    </div>
  );
};

export default Dashboard;