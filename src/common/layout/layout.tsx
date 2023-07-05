import Topbar from "./topbar";
import SideNavbar from "./sidenavbar";

interface LayoutProps {
  children: React.ReactNode;
}

  function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <Topbar />
      <div className="layout-wrapper__container">
        <SideNavbar />
        <div className="layout-wrapper__container--content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
