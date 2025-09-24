
import React from 'react';
import { Alert } from '../types';
import { ALERT_COLORS, Icons } from '../constants';

interface AlertsLogProps {
  alerts: Alert[];
}

const AlertsLog: React.FC<AlertsLogProps> = ({ alerts }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-slate-100">Recent Alerts</h2>
      <div className="space-y-4">
        {alerts.map(alert => {
            const colors = ALERT_COLORS[alert.level];
            return (
                <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${colors.border} ${colors.bg}`}>
                    <div className="flex items-start">
                        <div className={`mr-3 mt-1 ${colors.text}`}>
                          <Icons.AlertTriangle/>
                        </div>
                        <div>
                            <p className={`font-semibold ${colors.text}`}>{alert.level} on {alert.lineId}</p>
                            <p className="text-sm text-slate-300">{alert.message}</p>
                            <p className="text-xs text-slate-500 mt-1">{alert.timestamp}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default AlertsLog;
