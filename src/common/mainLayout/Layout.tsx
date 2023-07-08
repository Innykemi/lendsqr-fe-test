import Topbar from "./Topbar";
import SideNavbar from "./SideNavbar";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="layout-wrapper">
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="container">
        <SideNavbar isOpen={isSidebarOpen} />
        <div className="content-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
