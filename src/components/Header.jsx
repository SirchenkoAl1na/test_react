import Logo from "../assets/image/image-index/header/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper container">
        <div className="header__content">
          <div className="row">
            <div className="header__logo mr-top col-xl-5 col-lg-3">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <nav className="header__menu mr-top col-xl-5 col-lg-6 justify-content-center d-flex">
              <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "header__menu--active" : ""}>Home</NavLink></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><NavLink to="/blog" className={({ isActive }) => isActive ? "header__menu--active" : ""}>Blog</NavLink></li>
              </ul>
            </nav>
            <div className="col-xl-2 col-lg-3 justify-content-center d-flex">
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;