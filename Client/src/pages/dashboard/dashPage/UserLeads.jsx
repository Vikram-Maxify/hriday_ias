import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScholarships } from "../../../reducer/slice/scholarshipSlice";
import { deleteScholarship } from "../../../reducer/slice/scholarshipSlice";
import { Mail, Phone, MapPin, GraduationCap, Target, Globe, BookOpen, Calendar } from 'lucide-react';
import LeadDetailsPopup from './LeadDetailsPopup';
import Swal from "sweetalert2";


const UserLeads = () => {
    const dispatch = useDispatch();
    const { data: scholarships, loading } = useSelector((state) => state.scholarship);
    const [selectedLead, setSelectedLead] = useState(null);

    const handleDelete = (id) => {
  Swal.fire({
    title: "Delete this lead?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#b91c1c",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete it",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteScholarship(id));

      Swal.fire({
        title: "Deleted!",
        text: "Lead has been removed.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};

    useEffect(() => {
        dispatch(getScholarships());
    }, [dispatch]);

    const handleExportCSV = () => {
        if (!scholarships || scholarships.length === 0) return;

        // Define CSV headers based on the Scholarship model
        const headers = [
            "Full Name",
            "WhatsApp",
            "Email",
            "Location",
            "Education Status",
            "Target Attempt",
            "Appeared Before",
            "Medium",
            "Study Mode",
            "Reason",
            "Applied Date"
        ];

        // Map data to CSV rows
        const rows = scholarships.map(lead => [
            `"${lead.fullName || ""}"`,
            `"${lead.whatsappNumber || ""}"`,
            `"${lead.email || ""}"`,
            `"${lead.currentLocation || ""}"`,
            `"${lead.educationStatus || ""}"`,
            `"${lead.upscAttemptTarget || ""}"`,
            `"${lead.appearedBefore || ""}"`,
            `"${lead.medium || ""}"`,
            `"${lead.studyMode || ""}"`,
            `"${(lead.reason || "").replace(/"/g, '""')}"`, // Escape quotes for CSV
            `"${new Date(lead.createdAt).toLocaleString()}"`
        ]);

        const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `scholarship_leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.click();
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-headline font-bold text-on-surface">Scholarship Leads</h1>
                    <p className="text-on-surface-variant text-sm">Manage and track student applications.</p>
                </div>
                <button
                    onClick={handleExportCSV}
                    disabled={!scholarships?.length}
                    className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-medium shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
                                            <div><b>Status: {" "}</b> {lead.educationStatus || "N/A"}</div>
                                            <div><b>Attempt:{" "} </b> {lead.upscAttemptTarget || "N/A"}</div>
                                            <div><b>Appeared:{" "}</b> {lead.appearedBefore || "N/A"}</div>
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
                                            <div className="flex justify-end gap-3">
    <button 
        onClick={() => setSelectedLead(lead)}
        className="text-primary font-medium hover:underline"
    >
        View
    </button>

    <button 
        onClick={() => handleDelete(lead._id)}
        className="text-red-500 font-medium hover:underline"
    >
        Delete
    </button>
</div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <LeadDetailsPopup
                isOpen={Boolean(selectedLead)}
                lead={selectedLead}
                onClose={() => setSelectedLead(null)}
            />
        </div>
    );
};

export default UserLeads;