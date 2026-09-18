import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkHealth } from '../services/api';

const Home = () => {
  const [health, setHealth] = useState({
    loading: true,
    backend: 'Checking...',
    database: 'Checking...',
  });

  const fetchStatus = async () => {
    setHealth((prev) => ({ ...prev, loading: true }));
    try {
      const res = await checkHealth();
      if (res.success) {
        setHealth({
          loading: false,
          backend: 'Connected',
          database: res.database === 'connected' ? 'Connected' : res.database || 'Disconnected',
        });
      } else {
        setHealth({
          loading: false,
          backend: 'Disconnected',
          database: 'Disconnected',
        });
      }
    } catch {
      setHealth({
        loading: false,
        backend: 'Disconnected',
        database: 'Disconnected',
      });
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 w-full">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-xl mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Task Management System
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
          Manage your tasks efficiently and stay organized.
        </p>

        <div className="mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Real-time Connection Status Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              System Integration Status
            </h3>
            <button
              onClick={fetchStatus}
              disabled={health.loading}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium disabled:opacity-50"
            >
              {health.loading ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-medium text-slate-600">Backend Status:</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  health.backend === 'Connected'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {health.backend}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <span className="font-medium text-slate-600">Database Status:</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  health.database === 'Connected'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {health.database}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

