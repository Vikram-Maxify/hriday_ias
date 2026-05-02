import React from 'react';
import { Users, FileText, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: "Total Leads", value: "124", icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Active Users", value: "1,205", icon: Users, color: "text-green-600", bg: "bg-green-100" },
    { label: "Conversion Rate", value: "12%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-headline font-bold text-on-surface">Overview</h1>
        <p className="text-on-surface-variant text-sm">Welcome back! Here is what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-surface p-6 rounded-2xl border border-surface-variant shadow-soft flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-on-surface">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-surface p-6 rounded-2xl border border-surface-variant shadow-soft h-64 flex items-center justify-center text-on-surface-variant italic">
        Analytics Graph Placeholder
      </div>
    </div>
  );
};

export default Dashboard;