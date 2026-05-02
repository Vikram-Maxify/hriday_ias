import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createScholarship, resetState } from "../reducer/slice/scholarshipSlice";

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

        console.log(formData); // 🔍 debug

        const resultAction = await dispatch(createScholarship(formData));

        if (createScholarship.fulfilled.match(resultAction)) {
            dispatch(resetState());
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
            alert(resultAction.payload?.message || "Submission failed ❌");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-surface rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-premium">

                <h2 className="text-2xl font-headline text-primary mb-4">
                    Scholarship Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        name="fullName"
                        value={formData.fullName}
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />

                    <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        placeholder="WhatsApp Number"
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />

                    <input
                        name="currentLocation"
                        value={formData.currentLocation}
                        placeholder="City / State"
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />

                    <select
                        name="educationStatus"
                        value={formData.educationStatus}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    >
                        <option value="">Educational Status</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Final Year Student">Final Year Student</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Working Professional">Working Professional</option>
                    </select>

                    <select
                        name="upscAttemptTarget"
                        value={formData.upscAttemptTarget}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    >
                        <option value="">Target Attempt</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029+">2029+</option>
                    </select>

                    <select
                        name="appearedBefore"
                        value={formData.appearedBefore}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    >
                        <option value="">Appeared for Prelims?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <select
                        name="medium"
                        value={formData.medium}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    >
                        <option value="">Medium</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hinglish">Hinglish</option>
                    </select>

                    <select
                        name="studyMode"
                        value={formData.studyMode}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    >
                        <option value="">Study Mode</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>

                    <textarea
                        name="reason"
                        value={formData.reason}
                        placeholder="Why do you want to join this Scholarship Test?"
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded shadow-button hover:opacity-90 disabled:opacity-50"
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