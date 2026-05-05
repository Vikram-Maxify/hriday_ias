import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createScholarship, resetState } from "../reducer/slice/scholarshipSlice";
import Swal from "sweetalert2";

const ScholarshipPopup = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.scholarship);

    const [formData, setFormData] = useState({
        fullName: "",
        whatsappNumber: "",
        email: "",
        currentLocation: "",
        educationStatus: "",
        upscAttemptTarget: "",
        appearedBefore: "",
        medium: "",
        studyMode: "",
        reason: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resultAction = await dispatch(createScholarship(formData));

        if (createScholarship.fulfilled.match(resultAction)) {
            dispatch(resetState());

            // ✅ SAVE TO LOCALSTORAGE (important)
            localStorage.setItem("hriday_ias_form", "submitted");

            Swal.fire({
                title: "Application Submitted 🎉",
                text: "We will contact you soon!",
                icon: "success",
                confirmButtonColor: "#7c2d12",
            });

            onClose();

            setFormData({
                fullName: "",
                whatsappNumber: "",
                email: "",
                currentLocation: "",
                educationStatus: "",
                upscAttemptTarget: "",
                appearedBefore: "",
                medium: "",
                studyMode: "",
                reason: "",
            });

        } else {
            Swal.fire({
                title: "Error",
                text: resultAction.payload?.message || "Submission failed",
                icon: "error",
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
            <div className="bg-surface rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-premium">

                <h2 className="text-2xl font-headline text-primary mb-6">
                    Scholarship Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Full Name</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/40"
                            required
                        />
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">WhatsApp Number</label>
                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/40"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/40"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">City / State</label>
                        <input
                            name="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/40"
                            required
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Educational Status</label>
                        <select
                            name="educationStatus"
                            value={formData.educationStatus}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Final Year Student">Final Year Student</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Working Professional">Working Professional</option>
                        </select>
                    </div>

                    {/* Attempt */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Target Attempt</label>
                        <select
                            name="upscAttemptTarget"
                            value={formData.upscAttemptTarget}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029+">2029+</option>
                        </select>
                    </div>

                    {/* Appeared */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Appeared for Prelims?</label>
                        <select
                            name="appearedBefore"
                            value={formData.appearedBefore}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Medium */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Medium</label>
                        <select
                            name="medium"
                            value={formData.medium}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Hinglish">Bilingual</option>
                        </select>
                    </div>

                    {/* Mode */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Study Mode</label>
                        <select
                            name="studyMode"
                            value={formData.studyMode}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Select</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">
                            Why do you want to join?
                        </label>
                        <textarea
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-full shadow-button hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Apply Now"}
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full text-sm text-gray-500 mt-2"
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ScholarshipPopup;