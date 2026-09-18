import React, { useState, useEffect } from 'react';
import { checkHealth } from '../services/api';

const Dashboard = () => {
  const [status, setStatus] = useState({
    backend: 'Checking...',
    database: 'Checking...',
  });

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const data = await checkHealth();
        if (data.success) {
          setStatus({
            backend: 'Connected',
            database: data.database === 'connected' ? 'Connected' : data.database || 'Disconnected',
          });
        } else {
          setStatus({
            backend: 'Disconnected',
            database: 'Disconnected',
          });
        }
      } catch {
        setStatus({
          backend: 'Disconnected',
          database: 'Disconnected',
        });
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">
          Welcome to the Task Management System.
        </p>
      </div>

      {/* System Status Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Backend API</p>
            <p className="text-xl font-bold text-slate-900 mt-1">{status.backend}</p>
          </div>
          <span
            className={`w-3 h-3 rounded-full ${
              status.backend === 'Connected' ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">MongoDB Database</p>
            <p className="text-xl font-bold text-slate-900 mt-1">{status.database}</p>
          </div>
          <span
            className={`w-3 h-3 rounded-full ${
              status.database === 'Connected' ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
        </div>
      </div>

      {/* Placeholder for Future Phase Architecture */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Phase 1 Infrastructure Ready</h2>
        <p className="text-sm text-slate-600">
          Frontend and backend architecture ready for future modules (Task CRUD, Authentication, User Management, Analytics & Filtering).
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

