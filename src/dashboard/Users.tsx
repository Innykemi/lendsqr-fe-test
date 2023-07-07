import Layout from '../common/layout/layout';
import UsersCard from '../common/card/Card';
import { ReactComponent as UsersOutline } from "../assets/images/icons/users-outline.svg";
import { ReactComponent as UserFriendsOutline } from "../assets/images/icons/user-friends-outline.svg";
import { ReactComponent as LoanIcon } from "../assets/images/icons/loan.svg";
import { ReactComponent as MoneyIcon } from "../assets/images/icons/money.svg";

function Dashboard() {
  return (
    <Layout>
      <div className="users-list-wrapper">
        <h3 className="users-list-wrapper__header-title">Users</h3>
        <div className="users-list-wrapper__users-summary">
          <UsersCard
            icon={<UsersOutline />}
            title="Users"
            value="2,453"
            iconWrapperBg="rgba(223, 24, 255, 0.1)" />
          <UsersCard
            icon={<UserFriendsOutline />}
            title="Active Users"
            value="2,453"
            iconWrapperBg="rgba(87, 24, 255, 0.1)" />
          <UsersCard
            icon={<LoanIcon />}
            title="Users with Loans"
            value="12,453"
            iconWrapperBg="rgba(245, 95, 68, 0.1)" />
          <UsersCard
            icon={<MoneyIcon />}
            title="Users with Savings"
            value="102,453"
            iconWrapperBg="rgba(255, 51, 102, 0.1)" />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
