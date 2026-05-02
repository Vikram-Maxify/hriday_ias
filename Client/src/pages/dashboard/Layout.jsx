import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./dashPage/Sidebar";
import Topbar from "./dashPage/Topbar";

const Layout = () => {
    return (
        <div className="flex bg-background text-on-surface font-body">

            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col h-screen">

                {/* Topbar */}
                <Topbar />

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default Layout;