import Topbar from "./Topbar";
import SideNavbar from "./SideNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <Topbar />
      <div className="container">
        <SideNavbar />
        <div className="content-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
