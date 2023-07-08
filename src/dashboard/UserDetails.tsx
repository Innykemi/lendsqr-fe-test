import { useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '../common/mainLayout/Layout';
// import { ReactComponent as UserOutline } from "../assets/images/icons/user-outline.svg";
import { ReactComponent as BackArrow } from "../assets/images/icons/back-arrow.svg";
import { ReactComponent as Star } from "../assets/images/icons/star.svg";
import { ReactComponent as StarOutline } from "../assets/images/icons/star-outline.svg";
import Button from '../common/button/Button';

interface User {
  id: number;
  profile: {
    firstName: string;
    lastName: string;
    bvn: string;
    avatar: string;
    gender: string;
  };
  accountBalance: string;
  accountNumber: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  phoneNumber: string;
  email: string
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  }
}

function UserDetails() {
  const { id }: { id?: string } = useParams();
  const navigate = useNavigate();

  console.log("I am here", id);

  const user: User | undefined = useMemo(() => {
    const usersData = localStorage.getItem('lend-users');
    if (usersData && id) {
      const parsedUsers = JSON.parse(usersData);
      if (parsedUsers[id]) {
        return parsedUsers[id];
      }
    }
    return undefined;
  }, [id]);

  useEffect(() => {
    if (!user) {
      navigate('/users');
    }
  }, [user, navigate]);

  if (!user) {
    return <div className='loader'></div>;
  }

  return (
    <Layout>
      <div className="user-details-wrapper">
        <div className="header">
          <Link className="back-to-link" to="/users">
            <BackArrow />Back to Users
          </Link>
          <div className="header-title-wrapper">
            <h3 className="header-title">User Details</h3>
            <div className="header-buttons">
              <Button
                variant="outlined"
                borderColor="#E4033B"
                textColor="#E4033B"
                className="loose"
                btnWidth="10.625rem"
              >
                Blacklist User
              </Button>
              <Button
                variant="outlined"
                borderColor="#39CDCC"
                textColor="#39CDCC"
                className="loose"
                btnWidth="10.625rem"
              >
                Activate User
              </Button>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="user-primary-info">
            <div className="primary-info-wrapper">
              <div className="user-summary">
                <div className="icon"><img src={user.profile.avatar} alt='profilePhoto'/></div>
                <div className="user-details">
                  <h4 className="user-name">
                    {user.profile.firstName} {user.profile.lastName}
                  </h4>
                  <p className="user-id">
                    {user.profile.bvn}
                  </p>
                </div>
              </div>
              <div className="user-tier">
                <p>User's Tier</p>
                <div className="icons">
                  <Star />
                  <StarOutline />
                  <StarOutline />
                </div>
              </div>
              <div className="user-bank-details">
                <h4 data-testid="account-balance">₦{user.accountBalance}</h4>
                <p data-testid="account-number">{user.accountNumber}/Providus Bank</p>
              </div>
            </div>
            <div className="tab-header">
              <div className="tab-item active">General Details</div>
              <div className="tab-item">Documents</div>
              <div className="tab-item">Bank Details</div>
              <div className="tab-item">Loans</div>
              <div className="tab-item">Savings</div>
              <div className="tab-item">App and System</div>
            </div>
          </div>
          <div className="user-tab-info">
            <div className="personal-info">
              <h5>Personal Information</h5>
              <div className="item-group">
                <div className="item">
                  <p className="item-title">Full Name</p>
                  <h5 data-testid="full-name">{user.profile.firstName} {user.profile.lastName}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Phone Number</p>
                  <h5>{user.phoneNumber}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Email Address</p>
                  <h5>{user.email}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Bvn</p>
                  <h5 data-testid="bvn">{user.profile.bvn}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Gender</p>
                  <h5>{user.profile.gender}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Marital status</p>
                  <h5>Single</h5>
                </div>
                <div className="item">
                  <p className="item-title">Children</p>
                  <h5>None</h5>
                </div>
                <div className="item">
                  <p className="item-title">Type of residence</p>
                  <h5>Parent's Apartment</h5>
                </div>
              </div>
            </div>
            <div className="education-employment-info">
              <h5>Education and Employment</h5>
              <div className="item-group">
                <div className="item">
                  <p className="item-title">level of education</p>
                  <h5>{user.education.level}</h5>
                </div>
                <div className="item">
                  <p className="item-title">employment status</p>
                  <h5>{user.education.employmentStatus}</h5>
                </div>
                <div className="item">
                  <p className="item-title">sector of employment</p>
                  <h5>{user.education.sector}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Duration of employment</p>
                  <h5>{user.education.sector}</h5>
                </div>
                <div className="item">
                  <p className="item-title">office email</p>
                  <h5>{user.education.officeEmail}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Monthly income</p>
                  <h5>₦{user.education.monthlyIncome[0]}</h5>
                </div>
                <div className="item">
                  <p className="item-title">loan repayment</p>
                  <h5>{user.education.loanRepayment}</h5>
                </div>
              </div>
            </div>
            <div className="socials">
              <h5>Socials</h5>
              <div className="item-group">
                <div className="item">
                  <p className="item-title">Twitter</p>
                  <h5>{user.socials.twitter}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Facebook</p>
                  <h5>{user.socials.facebook}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Instagram</p>
                  <h5>{user.socials.instagram}</h5>
                </div>
              </div>
            </div>
            <div className="guarantor-section">
              <h5>Guarantor</h5>
              <div className="item-group">
                <div className="item">
                  <p className="item-title">full Name</p>
                  <h5>{user.guarantor.firstName} {user.guarantor.lastName}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Phone Number</p>
                  <h5>{user.guarantor.phoneNumber}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Email Address</p>
                  <h5>sist@sample.com</h5>
                </div>
                <div className="item">
                  <p className="item-title">Relationship</p>
                  <h5>Sister</h5>
                </div>
              </div>
            </div>
            <div className="guarantor-section2">
              <div className="item-group">
                <div className="item">
                  <p className="item-title">full Name</p>
                  <h5>{user.profile.firstName} {user.profile.lastName}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Phone Number</p>
                  <h5>{user.phoneNumber}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Email Address</p>
                  <h5>{user.email}</h5>
                </div>
                <div className="item">
                  <p className="item-title">Relationshipt</p>
                  <h5>Sister</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDetails;
