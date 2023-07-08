import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icons/search-icon.svg';
import { ReactComponent as BellIcon } from '../../assets/images/icons/bell.svg';
import { ReactComponent as Avatar } from '../../assets/images/icons/avatar.svg';
import { ReactComponent as DropDownIcon } from '../../assets/images/icons/dropdown.svg';
import MobileNav from "./MobileNavbar";

interface TopBarProps {
  toggleSidebar: () => void
}
function TopBar ({ toggleSidebar }: TopBarProps) {
    return (
      <div className="topbar-wrapper">
        <Logo className="logo-img" />
        <div className="search">
          <input type="search" placeholder="Search for anything" />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="topbar-right-group">
          <div className="info-links">
            <p className="link">Docs</p>
            <BellIcon />
          </div>
          <div className="user-avatar-wrapper">
            <Avatar className="avatar" />
            <p>Adedeji <DropDownIcon /></p>
          </div>
        </div>
        <MobileNav toggleSidebar={toggleSidebar} />
      </div>
    );
  }
  
  export default TopBar;