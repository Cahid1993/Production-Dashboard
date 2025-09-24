import React from 'react';

export const TEA_BLEND_COLORS = {
  'Earl Grey': '#8884d8',
  'Green Tea': '#82ca9d',
  'Chamomile': '#ffc658',
  'English Breakfast': '#ff8042',
};

// FIX: Added STATUS_COLORS and ALERT_COLORS to resolve import errors.
export const STATUS_COLORS: { [key: string]: string } = {
  Running: 'bg-emerald-500',
  Idle: 'bg-amber-500',
  Maintenance: 'bg-sky-500',
  Error: 'bg-red-500',
};

export const ALERT_COLORS: { [key: string]: { border: string; bg: string; text: string } } = {
  Info: {
    border: 'border-sky-500',
    bg: 'bg-sky-900/50',
    text: 'text-sky-400',
  },
  Warning: {
    border: 'border-amber-500',
    bg: 'bg-amber-900/50',
    text: 'text-amber-400',
  },
  Critical: {
    border: 'border-red-500',
    bg: 'bg-red-900/50',
    text: 'text-red-400',
  },
};

export const Icons = {
  Box: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
  // FIX: Added AlertTriangle icon to resolve missing property error.
  AlertTriangle: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
};
