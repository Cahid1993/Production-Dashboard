import { useState, useEffect } from 'react';
import { ProductionData } from '../types';
import { fetchProductionData } from '../services/mockDataService';

export const useProductionData = (refreshInterval: number = 5000) => {
  const [data, setData] = useState<ProductionData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchProductionData();
        setData(result);
      } catch (err) {
        setError('Failed to fetch production data.');
        console.error(err);
      } finally {
        if (isLoading) setIsLoading(false);
      }
    };

    getData(); // Initial fetch

    const intervalId = setInterval(getData, refreshInterval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshInterval]);

  return { data, isLoading, error };
};
