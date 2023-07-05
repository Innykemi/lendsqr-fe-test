import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LoginImage } from "../assets/images/login-img.svg";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-wrapper__logo-banner">
        <Logo className="logo-img" />
      </div>

      <div className="login-wrapper__login-img-wrapper">
        <LoginImage className="login-img" />
      </div>

      <div className="login-wrapper__form-wrapper">
        <div className="login-wrapper__form-wrapper--header">
          <h1 className="title">Welcome!</h1>
          <div className="sub-title"> Enter details to login.</div>
        </div>

        <form>
          <div className="login-wrapper__form-wrapper--input-fields">
            <input type="email" placeholder="Email" className="email-input" />
            <input type="password" placeholder="Password" className="password-input" />
          </div>
          
          <div className="login-wrapper__form-wrapper--forgot-password">Forgot Password?</div>
          <button className="login-wrapper__form-wrapper--login-btn" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
