import React from 'react';
import { useSelector } from 'react-redux';
import { ShieldCheck, Mail, User } from 'lucide-react';

const Users = () => {
  const { admin } = useSelector((state) => state.admin);

  if (!admin) {
    return <div className="p-6">Loading profile...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-headline font-bold text-on-surface">Admin Profile</h1>
          <p className="text-on-surface-variant text-sm">View and manage your account details.</p>
        </div>
      </div>

      <div className="max-w-2xl bg-surface p-8 rounded-2xl border border-surface-variant shadow-soft">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Icon/Avatar */}
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/20">
            <User size={48} />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Full Name</label>
              <h3 className="text-xl font-bold text-on-surface">{admin.name}</h3>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Email Address</label>
              <div className="flex items-center gap-2 text-on-surface">
                <Mail size={18} className="text-primary" />
                <span className="font-medium">{admin.email}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-variant">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">
                <ShieldCheck size={14} />
                Administrator
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;