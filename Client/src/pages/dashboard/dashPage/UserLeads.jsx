import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScholarships } from "../../../reducer/slice/scholarshipSlice";
import { Mail, Phone, MapPin } from 'lucide-react';

const UserLeads = () => {
    const dispatch = useDispatch();
    const { data: scholarships, loading } = useSelector((state) => state.scholarship);

    useEffect(() => {
        dispatch(getScholarships());
    }, [dispatch]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-headline font-bold text-on-surface">Scholarship Leads</h1>
                    <p className="text-on-surface-variant text-sm">Manage and track student applications.</p>
                </div>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-medium shadow-button">
                    Export CSV
                </button>
            </div>

            <div className="bg-surface rounded-2xl border border-surface-variant shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-surface-variant/50 text-on-surface-variant text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Student</th>
                                <th className="px-6 py-4 font-semibold">Contact</th>
                                <th className="px-6 py-4 font-semibold">Education</th>
                                <th className="px-6 py-4 font-semibold">Details</th>
                                <th className="px-6 py-4 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-variant text-sm text-on-surface">
{loading ? (
    <tr>
        <td colSpan="5" className="px-6 py-10 text-center">
            Loading leads...
        </td>
    </tr>
) : scholarships?.length === 0 ? (
    <tr>
        <td colSpan="5" className="px-6 py-10 text-center">
            No leads found.
        </td>
    </tr>
) : (
    scholarships?.map((lead) => (
        <tr key={lead._id} className="hover:bg-surface-variant/20 transition-colors">

            {/* 🔥 STUDENT */}
            <td className="px-6 py-4">
                <div className="font-bold">{lead.fullName}</div>
                <div className="text-xs text-on-surface-variant mt-1">
                    ID: {lead._id.slice(-6)}
                </div>
                <div className="text-xs text-gray-400">
                    {new Date(lead.createdAt).toLocaleString()}
                </div>
            </td>

            {/* 🔥 CONTACT */}
            <td className="px-6 py-4 space-y-1">
                <div className="flex items-center gap-2">
                    <Phone size={14} className="text-primary" />
                    {lead.whatsappNumber}
                </div>

                <div className="flex items-center gap-2">
                    <Mail size={14} className="text-primary" />
                    {lead.email}
                </div>

                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    {lead.currentLocation}
                </div>
            </td>

            {/* 🔥 EDUCATION */}
            <td className="px-6 py-4 space-y-1">
                <div><b>Status:</b> {lead.educationStatus}</div>
                <div><b>Attempt:</b> {lead.upscAttemptTarget}</div>
                <div><b>Appeared:</b> {lead.appearedBefore}</div>
            </td>

            {/* 🔥 DETAILS */}
            <td className="px-6 py-4 space-y-2">
                <div>
                    <span className="px-2 py-1 rounded-md bg-accent/10 text-primary text-[10px] font-bold uppercase mr-1">
                        {lead.medium}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase">
                        {lead.studyMode}
                    </span>
                </div>

                <div className="text-xs text-on-surface-variant max-w-xs">
                    {lead.reason}
                </div>
            </td>

            {/* 🔥 ACTION */}
            <td className="px-6 py-4 text-right">
                <button className="text-primary font-medium hover:underline">
                    View Details
                </button>
            </td>
        </tr>
    ))
)}
</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserLeads;