import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid gap-4 p-4 grid-cols-1 lg:grid-cols-[220px_1fr]  ">
      <Sidebar />
      {children}
    </div>
  );
};
export default DashboardLayout;
