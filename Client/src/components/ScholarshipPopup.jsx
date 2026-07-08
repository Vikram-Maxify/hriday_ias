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
                        <label className="text-sm font-medium mb-1 block">
                            Full Name
                        </label>

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
                        <label className="text-sm font-medium mb-1 block">
                            WhatsApp Number
                        </label>

                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/40"
                            required
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