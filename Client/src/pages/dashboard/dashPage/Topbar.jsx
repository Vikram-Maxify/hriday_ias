import React from "react";
import { FiMenu } from "react-icons/fi";

const Topbar = () => {
    return (
        <header className="h-16 bg-surface border-b border-surface-variant flex items-center justify-between px-6 shadow-soft">

            {/* Left */}
            <div className="flex items-center gap-3">
                <FiMenu className="text-xl cursor-pointer" />
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                <span className="text-sm text-on-surface-variant">
                    Admin
                </span>

                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-semibold">
                    A
                </div>

            </div>
        </header>
    );
};

export default Topbar;