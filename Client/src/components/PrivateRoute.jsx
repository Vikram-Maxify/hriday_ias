import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProfile } from "../reducer/slice/adminSlice";

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();

    const { isAuthenticated, checked } = useSelector((state) => state.admin);

    useEffect(() => {
        if (!checked) {
            dispatch(getProfile()); // 🔥 refresh pe user verify karega
        }
    }, [checked, dispatch]);

    // ⛔ jab tak check nahi hua
    if (!checked) {
        return <div className="p-6">Checking auth...</div>;
    }

    // ❌ not logged in
    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    // ✅ logged in
    return children;
};

export default PrivateRoute;