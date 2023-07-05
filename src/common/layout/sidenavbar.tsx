import { Link } from "react-router-dom";
import { ReactComponent as Briefcase } from "../../assets/images/icons/briefcase.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/icons/home.svg";
import { ReactComponent as UsersIcon } from "../../assets/images/icons/user-friends.svg";

function SideNavbar() {
  return (
    <div className="sidenavbar-wrapper">
      <Link className="sidenavbar-wrapper__nav-item active" to="/">
        <Briefcase />
        <p>Switch Organization</p>
      </Link>
      <Link className="sidenavbar-wrapper__nav-item" to="/users">
        <HomeIcon />
        <p>Dashboard</p>
      </Link>
      <div className="sidenavbar-wrapper__nav-subtitle">
        <p>CUSTOMERS</p>
      </div>
      <Link className="sidenavbar-wrapper__nav-item" to="/users">
        <UsersIcon />
        <p>Users</p>
      </Link>
    </div>
  );
};
  
export default SideNavbar;