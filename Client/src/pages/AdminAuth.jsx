import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    loginAdmin,
    registerAdmin,
    resetAdminState,
} from "../reducer/slice/adminSlice"

const AdminAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, success } = useSelector((state) => state.admin);

    const [isLogin, setIsLogin] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            dispatch(loginAdmin({ email: form.email, password: form.password }));
        } else {
            dispatch(registerAdmin(form));
        }
    };

    useEffect(() => {
        if (success) {
            setForm({ name: "", email: "", password: "" });
            dispatch(resetAdminState());

            // 🔥 redirect after login/register
            navigate("/admin/dashboard");
        }
    }, [success, dispatch, navigate]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Admin Login" : "Create Admin Account"}
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
                    >
                        {loading
                            ? "Please wait..."
                            : isLogin
                                ? "Login"
                                : "Register"}
                    </button>
                </form>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                        {error}
                    </p>
                )}

                {/* Toggle */}
                <p className="text-center text-sm mt-4">
                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-black font-medium cursor-pointer underline"
                    >
                        {isLogin ? "Register" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AdminAuth;