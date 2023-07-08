import { useEffect, useState } from 'react';
import Layout from '../common/mainLayout/Layout';
import UsersCard from '../common/card/Card';
import { ReactComponent as FilterIcon } from "../assets/images/icons/filter.svg";
import { ReactComponent as LoanIcon } from "../assets/images/icons/loan.svg";
import { ReactComponent as MoneyIcon } from "../assets/images/icons/money.svg";
import { ReactComponent as More } from "../assets/images/icons/more.svg";
import { ReactComponent as UsersOutline } from "../assets/images/icons/users-outline.svg";
import { ReactComponent as UserFriendsOutline } from "../assets/images/icons/user-friends-outline.svg";
import FilterForm from '../common/filterForm/FilterForm';
import {getAllUsers} from '../api';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  companyName: string;
  username: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [originalUsers, setOriginalUsers] = useState<User[]>([]);
  const [pageSize, setPageSize] = useState(25);
  const [pageNumber, setPageNumber] = useState(1);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const users = await getAllUsers();

        setUsers(users);
        setOriginalUsers(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
  };

  // Calculate the total number of pages based on the pageSize and the number of users
  const totalPageCount = Math.ceil(users.length / pageSize);

  // Get the users for the current page based on the pageNumber and pageSize
  const currentPageUsers = users.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );

  const handleFilterClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    
    setShowFilter(!showFilter);
  };

  const handleMoreClick = (user: User) => {
    if (selectedUser?.id === user.id && showMoreMenu) {
      // If the clicked user is the same as the selectedUser and the More menu is already open, close the menu
      setShowMoreMenu(false);
      setSelectedUser(null);
    } else {
      // Otherwise, open the More menu for the clicked user
      setShowMoreMenu(true);
      setSelectedUser(user);
    }
  };

  const handleViewDetails = (user: User) => {
    const users = localStorage.getItem('lend-users');
    let parsedUsers: { [key: number]: User } = {};
  
    if (users) {
      parsedUsers = JSON.parse(users);
    }
  
    if (!parsedUsers[user.id]) {
      // Save the user to local storage if it is not already saved
      parsedUsers[user.id] = user;
      const newUsers = JSON.stringify(parsedUsers);
      localStorage.setItem('lend-users', newUsers);
    }
  
    // Perform navigation
    navigate(`/user/${user.id}`);
  };
  
  const handleFilter = (formData: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phonenumber: string;
    status: string;
  }) => {
    const { organization, username, email, phonenumber, status } = formData;
  
    // Perform the desired filter operations with the form data
  
    //Filter the users based on the form values
    const filteredUsers = users.filter((user) => {
      if (organization && user.companyName !== organization) {
        return false;
      }
      if (username && user.username !== username) {
        return false;
      }
      if (email && user.email !== email) {
        return false;
      }
      if (phonenumber && user.phoneNumber !== phonenumber) {
        return false;
      }
      if (status && user.status.toLowerCase() !== status.toLowerCase()) {
        return false;
      }
      return true;
    });
  
    // Update the users state with the filtered users
    setUsers(filteredUsers);
  
    // Reset the page number to the first page
    setPageNumber(1);
  
    // Close the filter form
    setShowFilter(false);
  };

  const handleReset = () => {
    // Reset the filter form to its initial state
    setUsers(originalUsers);
    setPageNumber(1);
    setShowFilter(false);
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
        {loading ? (
          <div id="loading-spinner" className='loader'></div>
        ) : (
          <>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Organization
                    <span className="filter" onClick={handleFilterClick}>
                      <FilterIcon />
                    </span>
                    {showFilter && (
                      <FilterForm
                        onSubmit={handleFilter}
                        onReset={handleReset}
                      />
                    )}
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
                {currentPageUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.companyName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.createdAt}</td>
                    <td className={user.status}>{user.status}</td>
                    <td
                        className="item-options"
                        onClick={() => handleMoreClick(user)}
                      >
                        <More />
                        {showMoreMenu && selectedUser?.id === user.id && (
                          <div className="more-menu">
                            <ul>
                              <li onClick={() => handleViewDetails(user)}>View Details</li>
                              <li>Blacklist Users</li>
                              <li>Activate Users</li>
                            </ul>
                          </div>
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <div className="page-info">
                Showing {" "} <div className="page-size">
                <select value={pageSize} onChange={handlePageSizeChange}>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div> out of {totalPageCount} pages
              </div>
              <div className="page-navigation">
                <button
                  onClick={handlePreviousPage}
                  disabled={pageNumber === 1}
                >
                  Previous
                </button>
                {pageNumber > 1 && (
                  <>
                    <button onClick={() => setPageNumber(1)}>1</button>
                    {pageNumber > 3 && <span>...</span>}
                  </>
                )}
                {pageNumber > 2 && (
                  <button onClick={() => setPageNumber(pageNumber - 1)}>
                    {pageNumber - 1}
                  </button>
                )}
                <button className="current-page">{pageNumber}</button>
                {pageNumber < totalPageCount - 1 && (
                  <button onClick={() => setPageNumber(pageNumber + 1)}>
                    {pageNumber + 1}
                  </button>
                )}
                {pageNumber < totalPageCount - 2 && <span>...</span>}
                {pageNumber < totalPageCount && (
                  <button onClick={() => setPageNumber(totalPageCount)}>
                    {totalPageCount}
                  </button>
                )}
                <button
                  onClick={handleNextPage}
                  disabled={pageNumber === totalPageCount}
                >
                  Next
                </button>
              </div>

            </div>
          </>
        )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
