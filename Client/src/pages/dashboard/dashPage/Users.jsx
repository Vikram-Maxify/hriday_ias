import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

const Users = () => {
  // Mock data for Admin Users
  const admins = [
    { name: "Super Admin", email: "admin@hridayias.com", role: "Super Admin", lastLogin: "2 hours ago" },
    { name: "Content Manager", email: "content@hridayias.com", role: "Editor", lastLogin: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-headline font-bold text-on-surface">Admin Users</h1>
          <p className="text-on-surface-variant text-sm">Manage team access and permissions.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
          Add New Admin
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {admins.map((admin, i) => (
          <div key={i} className="bg-surface p-5 rounded-2xl border border-surface-variant shadow-soft flex items-start justify-between">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">{admin.name}</h4>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant mt-1">
                  <Mail size={14} /> {admin.email}
                </div>
                <div className="mt-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-surface-variant px-2 py-1 rounded text-on-surface-variant">
                    {admin.role}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs text-on-surface-variant">Active {admin.lastLogin}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;