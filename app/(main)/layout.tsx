import React from "react";

import DashboardProvider from "./provider";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary">
      <DashboardProvider>
        <div className="p-10">{children}</div>
      </DashboardProvider>
    </div>
  );
}

export default DashboardLayout;
