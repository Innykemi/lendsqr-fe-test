import { Link } from "react-router-dom";
import { ReactComponent as Briefcase } from "../../assets/images/icons/briefcase.svg";
import { ReactComponent as HomeIcon } from "../../assets/images/icons/home.svg";
import { ReactComponent as Handshake } from "../../assets/images/icons/handshake.svg";
import { ReactComponent as PiggyBank } from "../../assets/images/icons/piggy-bank.svg";
import { ReactComponent as CashHand } from "../../assets/images/icons/cash-hand.svg";
import { ReactComponent as Sack } from "../../assets/images/icons/sack.svg";
import { ReactComponent as Users } from "../../assets/images/icons/users.svg";
import { ReactComponent as UserCheck } from "../../assets/images/icons/user-check.svg";
import { ReactComponent as UserTimes } from "../../assets/images/icons/user-times.svg";
import { ReactComponent as UsersIcon } from "../../assets/images/icons/user-friends.svg";
import { ReactComponent as Bank } from "../../assets/images/icons/bank.svg";
import { ReactComponent as Coins } from "../../assets/images/icons/coins-solid.svg";
import { ReactComponent as Galaxy } from "../../assets/images/icons/galaxy.svg";
import { ReactComponent as Sliders  } from "../../assets/images/icons/sliders.svg";
import { ReactComponent as UserCog } from "../../assets/images/icons/user-cog.svg";
import { ReactComponent as Scroll } from "../../assets/images/icons/scroll.svg";
import { ReactComponent as ChartBar } from "../../assets/images/icons/chart-bar.svg";
import { ReactComponent as BadgePercent } from "../../assets/images/icons/badge-percent.svg";
import { ReactComponent as ClipboardList } from "../../assets/images/icons/clipboard-list.svg";
import { ReactComponent as Tire } from "../../assets/images/icons/tire.svg";
import { ReactComponent as LogoutIcon } from "../../assets/images/icons/sign-out.svg";

interface SideNavbarProps {
  isOpen: boolean;
}

function SideNavbar({ isOpen }: SideNavbarProps) {
  return (
    <div className={`sidenavbar-wrapper ${isOpen ? "open" : ""}`}>
      <>
      <Link className="nav-item" to="#">
        <Briefcase />
        <p>Switch Organization</p>
      </Link>
      <Link className="nav-item" to="/">
        <HomeIcon />
        <p>Dashboard</p>
      </Link>
      <div className="nav-subtitle">
        <p>Customers</p>
      </div>
      <Link className="nav-item active" to="/users">
        <UsersIcon />
        <p>Users</p>
      </Link>
      <Link className="nav-item" to="#">
        <Users />
        <p>Guarantors</p>
      </Link>
      <Link className="nav-item" to="#">
        <Sack />
        <p>Loans</p>
      </Link>
      <Link className="nav-item" to="#">
        <Handshake />
        <p>Decision Models</p>
      </Link>
      <Link className="nav-item" to="#">
        <PiggyBank />
        <p>Savings</p>
      </Link>
      <Link className="nav-item" to="#">
        <CashHand />
        <p>Loan Requests</p>
      </Link>
      <Link className="nav-item" to="#">
        <UserCheck />
        <p>Whitelist</p>
      </Link>
      <Link className="nav-item" to="#">
        <UserTimes />
        <p>Karma</p>
      </Link>
      <div className="nav-subtitle">
        <p>Businesses</p>
      </div>
      <Link className="nav-item" to="#">
        <Briefcase />
        <p>Organization</p>
      </Link>
      <Link className="nav-item" to="#">
        <CashHand />
        <p>Loan Products</p>
      </Link>
      <Link className="nav-item" to="#">
        <Bank />
        <p>Savings Products</p>
      </Link>
      <Link className="nav-item" to="#">
        <Coins />
        <p>Fees and Charges</p>
      </Link>
      <Link className="nav-item" to="#">
        <Sliders />
        <p>Transactions</p>
      </Link>
      <Link className="nav-item" to="#">
        <Galaxy />
        <p>Services</p>
      </Link>
      <Link className="nav-item" to="#">
        <UserCog />
        <p>Service Account</p>
      </Link>
      <Link className="nav-item" to="#">
        <Scroll />
        <p>Settlements</p>
      </Link>
      <Link className="nav-item" to="#">
        <ChartBar />
        <p>Reports</p>
      </Link>
      <div className="nav-subtitle">
        <p>Settings</p>
      </div>
      <Link className="nav-item" to="#">
        <Sliders />
        <p>Preferences</p>
      </Link>
      <Link className="nav-item" to="#">
        <BadgePercent />
        <p>Fees and Pricing</p>
      </Link>
      <Link className="nav-item" to="#">
        <ClipboardList />
        <p>Audit Logs</p>
      </Link>
      <Link className="nav-item" to="#">
        <Tire />
        <p>Systems Messages</p>
      </Link>
      </>
      <div className="nav-footer">
        <Link className="nav-item" to="#">
          <LogoutIcon />
          <p>Logout</p>
        </Link>
        <p className="version">v1.2.0</p>
      </div>
    </div>
  );
};
  
export default SideNavbar;