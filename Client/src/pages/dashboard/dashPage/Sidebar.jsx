import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../reducer/slice/adminSlice";

import {
    LayoutDashboard,
    Users,
    FileText,
    LogOut,
} from "lucide-react";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ RELATIVE PATHS (BEST PRACTICE)
    const links = [
        { to: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { to: "users", label: "Users", icon: Users },
        { to: "leads", label: "User Leads", icon: FileText },
    ];

    const handleLogout = async () => {
        await dispatch(logoutAdmin());
        navigate("/admin/login");
    };

    return (
        <div className="h-screen w-[260px] bg-surface border-r border-surface-variant flex flex-col justify-between p-4">

            {/* TOP */}
            <div>

                {/* 🔥 Logo */}
                <Link to={"/"}>
                <div className="mb-8">
                    <h1 className="text-xl font-headline text-primary tracking-wide">
                        Hriday Admin
                    </h1>
                    <p className="text-xs text-on-surface-variant mt-1">
                        Dashboard Panel
                    </p>
                </div>
                </Link>

                {/* Links */}
                <div className="flex flex-col gap-1">
                    {links.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={i}
                                to={item.to}
                                end={item.to === "dashboard"} // ✅ active fix for index/dashboard
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`
                                            group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 cursor-pointer
                                            ${
                                                isActive
                                                    ? "bg-primary text-on-primary shadow-button"
                                                    : "text-on-surface-variant hover:text-primary hover:bg-surface-variant"
                                            }
                                        `}
                                    >
                                        <Icon
                                            size={18}
                                            className={`transition ${
                                                isActive
                                                    ? "text-on-primary"
                                                    : "group-hover:text-primary"
                                            }`}
                                        />
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}
                </div>

            </div>

            {/* 🔥 LOGOUT */}
            <div
                onClick={handleLogout}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-error hover:bg-surface-variant cursor-pointer transition"
            >
                <LogOut size={18} className="group-hover:scale-110 transition" />
                Logout
            </div>
        </div>
    );
};

export default Sidebar;