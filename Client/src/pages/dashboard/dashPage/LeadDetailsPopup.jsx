import { Mail, Phone, MapPin, X } from 'lucide-react';

const LeadDetailsPopup = ({ isOpen, lead, onClose }) => {
    if (!isOpen || !lead) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-surface p-6 shadow-2xl">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full bg-surface-variant p-2 text-on-surface hover:bg-surface-variant/80"
                    aria-label="Close detail popup"
                >
                    <X size={18} />
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-headline font-bold text-on-surface">
                        {lead.fullName}
                    </h2>
                    <p className="text-sm text-on-surface-variant mt-1">
                        Lead ID: {lead._id}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                        Submitted: {new Date(lead.createdAt).toLocaleString()}
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl bg-surface-variant/70 p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            Contact Information
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-on-surface">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />
                                <span>{lead.whatsappNumber || 'Not provided'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />
                                <span>{lead.email || 'Not provided'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-primary" />
                                <span>{lead.currentLocation || 'Not provided'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-surface-variant/70 p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                            Education Snapshot
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-on-surface">
                            <div>
                                <span className="font-semibold">Status:</span> {lead.educationStatus || 'N/A'}
                            </div>
                            <div>
                                <span className="font-semibold">Target Attempt:</span> {lead.upscAttemptTarget || 'N/A'}
                            </div>
                            <div>
                                <span className="font-semibold">Appeared Before:</span> {lead.appearedBefore || 'N/A'}
                            </div>
                            <div>
                                <span className="font-semibold">Medium:</span> {lead.medium || 'N/A'}
                            </div>
                            <div>
                                <span className="font-semibold">Study Mode:</span> {lead.studyMode || 'N/A'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-3xl bg-surface-variant/70 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                        Motivation & Notes
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-on-surface">
                        {lead.reason || 'No notes available for this lead.'}
                    </p>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-button hover:opacity-95"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadDetailsPopup;
