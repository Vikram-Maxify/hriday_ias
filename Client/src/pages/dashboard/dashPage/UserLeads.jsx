import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScholarships } from "../../../reducer/slice/scholarshipSlice";
import { deleteScholarship } from "../../../reducer/slice/scholarshipSlice";
import Swal from "sweetalert2";

const UserLeads = () => {
    const dispatch = useDispatch();

    const { data: scholarships, loading } = useSelector(
        (state) => state.scholarship
    );

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

        const headers = [
            "Full Name",
            "WhatsApp",
            "Email",
        ];

        const rows = scholarships.map((lead) => [
            `"${lead.fullName || ""}"`,
            `"${lead.whatsappNumber || ""}"`,
            `"${lead.email || ""}"`,
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map((row) => row.join(",")),
        ].join("\n");

        const blob = new Blob(
            [csvContent],
            { type: "text/csv;charset=utf-8;" }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.setAttribute("href", url);

        link.setAttribute(
            "download",
            `scholarship_leads_${new Date()
                .toISOString()
                .split('T')[0]}.csv`
        );

        link.click();
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-headline font-bold text-on-surface">
                        Scholarship Leads
                    </h1>

                    <p className="text-on-surface-variant text-sm">
                        Manage and track student applications.
                    </p>
                </div>

                <button
                    onClick={handleExportCSV}
                    disabled={!scholarships?.length}
                    className="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-medium shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Export CSV
                </button>
            </div>

            {/* TABLE */}
            <div className="bg-surface rounded-2xl border border-surface-variant shadow-soft overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        {/* TABLE HEAD */}
                        <thead className="bg-surface-variant/50 text-on-surface-variant text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">
                                    Name
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Email
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Number
                                </th>

                                <th className="px-6 py-4 font-semibold text-right">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody className="divide-y divide-surface-variant text-sm text-on-surface">

                            {loading ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-10 text-center"
                                    >
                                        Loading leads...
                                    </td>
                                </tr>

                            ) : scholarships?.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-10 text-center"
                                    >
                                        No leads found.
                                    </td>
                                </tr>

                            ) : (

                                scholarships?.map((lead) => (

                                    <tr
                                        key={lead._id}
                                        className="hover:bg-surface-variant/20 transition-colors"
                                    >

                                        {/* NAME */}
                                        <td className="px-6 py-4">
                                            <div className="font-bold">
                                                {lead.fullName}
                                            </div>
                                        </td>

                                        {/* EMAIL */}

                                        {/* NUMBER */}
                                        <td className="px-6 py-4">
                                            {lead.whatsappNumber}
                                        </td>

                                        {/* ACTION */}
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(lead._id)}
                                                className="text-red-500 font-medium hover:underline"
                                            >
                                                Delete
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