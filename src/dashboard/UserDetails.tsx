import Layout from '../common/layout/layout';
import { ReactComponent as UserOutline } from "../assets/images/icons/user-outline.svg";
import { ReactComponent as BackArrow } from "../assets/images/icons/back-arrow.svg";
import { ReactComponent as Star } from "../assets/images/icons/star.svg";
import { ReactComponent as StarOutline } from "../assets/images/icons/star-outline.svg";
import Button from '../common/button/Button';
import { Link } from 'react-router-dom';

function UserDetails() {
  return (
    <Layout>
      <div className="user-details-wrapper">
        <div className="user-details-wrapper__header">
          <Link className="user-details-wrapper__header--back" to="/users">
            <BackArrow />Back to Users
          </Link>
          <div className="user-details-wrapper__header--title">
            <h3 className="user-details-wrapper__header--title--text">User Details</h3>
            <div className="user-details-wrapper__header--title--buttons">
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
        <div className="user-details-wrapper__user-info">
          <div className="user-details-wrapper__user-info--primary-info">
            <div className="primary-info-wrapper">
              <div className="primary-info-wrapper__user-summary">
                <div className="primary-info-wrapper__user-summary--user-icon"><UserOutline /></div>
                <div className="primary-info-wrapper__user-summary--user">
                  <h4 className="primary-info-wrapper__user-summary--user--user-name">
                    Grace Effiom
                  </h4>
                  <p className="primary-info-wrapper__user-summary--user--user-id">
                    LSQFf587g90
                  </p> {/* user id */}
                </div>
              </div>
              <div className="primary-info-wrapper__user-tier">
                <p>User's Tier</p>
                <div className="icons">
                  <Star />
                  <StarOutline />
                  <StarOutline />
                </div>
              </div>
              <div className="primary-info-wrapper__user-bank-details">
                <h4>₦200,000.00</h4>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className="tab-header">
              <div className="user-icon"></div>
            </div>
          </div>
          <div className="user-details-wrapper__user-info--tab-info">
            <div className="personal-info">
              <h5>Personal Information</h5>
              <div className="personal-info__item-group">
                <div className="personal-info__item-group--item">
                  <p className="item-title">Full Name</p>
                  <h5>Grace Effiom</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Phone Number</p>
                  <h5>07060780922</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Email Address</p>
                  <h5>grace@gmail.com</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Bvn</p>
                  <h5>07060780922</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Gender</p>
                  <h5>Female</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Marital status</p>
                  <h5>Single</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Children</p>
                  <h5>None</h5>
                </div>
                <div className="personal-info__item-group--item">
                  <p className="item-title">Type of residence</p>
                  <h5>Parent's Apartment</h5>
                </div>
              </div>
            </div>
            <div className="education-employment-info">
              <h5>Education and Employment</h5>
              <div className="education-employment-info__item-group">
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">level of education</p>
                  <h5>B.Sc</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">employment status</p>
                  <h5>Employed</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">sector of employment</p>
                  <h5>FinTech</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">Duration of employment</p>
                  <h5>2 years</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">office email</p>
                  <h5>grace@lendsqr.com</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">Monthly income</p>
                  <h5>₦200,000.00- ₦400,000.00</h5>
                </div>
                <div className="education-employment-info__item-group--item">
                  <p className="item-title">loan repayment</p>
                  <h5>40,000</h5>
                </div>
              </div>
            </div>
            <div className="socials">
              <h5>Socials</h5>
              <div className="socials__item-group">
                <div className="socials__item-group--item">
                  <p className="item-title">Twitter</p>
                  <h5>@grace_effiom</h5>
                </div>
                <div className="socials__item-group--item">
                  <p className="item-title">Facebook</p>
                  <h5>Grace Effiom</h5>
                </div>
                <div className="socials__item-group--item">
                  <p className="item-title">Instagram</p>
                  <h5>@grace_effiom</h5>
                </div>
              </div>
            </div>
            <div className="guarantor-section">
              <h5>Guarantor</h5>
              <div className="guarantor-section__item-group">
                <div className="guarantor-section__item-group--item">
                  <p className="item-title">full Name</p>
                  <h5>Debby Ogana</h5>
                </div>
              </div>
            </div>
            <div className="guarantor-section2">
              <h5>Guarantor</h5>
              <div className="guarantor-section2__item-group">
                <div className="guarantor-section2__item-group--item">
                  <p className="item-title">full Name</p>
                  <h5>Debby Ogana</h5>
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
