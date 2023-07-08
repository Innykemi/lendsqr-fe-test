import { ReactComponent as MenuIcon } from "../../assets/images/icons/menu.svg";

interface MobileNavbarProps {
    toggleSidebar: () => void;
};

function MobileNavbar ({ toggleSidebar }: MobileNavbarProps) {
  return (
    <div className="mobile-navbar-wrapper">
      <div onClick={toggleSidebar}>
        <MenuIcon fill="#292D32" />
      </div>
    </div>
  );
}

export default MobileNavbar;