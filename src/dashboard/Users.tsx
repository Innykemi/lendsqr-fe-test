import { useState } from 'react';
import Layout from '../common/mainLayout/Layout';
import UsersCard from '../common/card/Card';
import { ReactComponent as FilterIcon } from "../assets/images/icons/filter.svg";
import { ReactComponent as LoanIcon } from "../assets/images/icons/loan.svg";
import { ReactComponent as MoneyIcon } from "../assets/images/icons/money.svg";
import { ReactComponent as More } from "../assets/images/icons/more.svg";
import { ReactComponent as UsersOutline } from "../assets/images/icons/users-outline.svg";
import { ReactComponent as UserFriendsOutline } from "../assets/images/icons/user-friends-outline.svg";
import FilterForm from '../common/filterForm/FilterForm';

function Dashboard() {
  const [showFilter, setShowFilter] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const handleFilterClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const thElement = event.currentTarget.parentElement as HTMLTableCellElement;
    const rect = thElement.getBoundingClientRect();
    const top = rect.top + 120;
    const left = rect.left - 80;
    setCardPosition({ top, left });
    setShowFilter(!showFilter);
  };

  return (
    <Layout>
      <div className="users-list-wrapper">
        <h3 className="header-title">Users</h3>
        <div className="users-summary">
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
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Organization
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th>Username
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th>Email
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th>Phone number
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th>Date joined
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th>Status
                  <span className="filter" onClick={handleFilterClick}>
                    <FilterIcon />
                  </span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>adedeji@lendsqr.com </td>
                <td>Column 4</td>
                <td>Column 5</td>
                <td>Column 6</td>
                <td className="item-options"><More /></td>
              </tr>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
                <td>Column 5</td>
                <td>Column 6</td>
                <td className="item-options"><More /></td>
              </tr>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
                <td>Column 4</td>
                <td>Column 5</td>
                <td>Column 6</td>
                <td className="item-options"><More /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showFilter && (
        <FilterForm
          cardPosition={cardPosition}
        />
      )}
    </Layout>
  );
}

export default Dashboard;
