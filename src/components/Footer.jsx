import Logo from "../assets/image/image-index/footer/Logo.svg"
import Facebook from "../assets/image/image-index/footer/facebook.svg"
import Twitter from "../assets/image/image-index/footer/twitter.svg"
import Instagram from "../assets/image/image-index/footer/instagram.svg"
import LinkedIn from "../assets/image/image-index/footer/linkedIn.svg"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper container">
        <div className="footer__content-top">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="footer__content-top-left">
                <div className="footer__logo">
                  <a href="#">
                    <img src={Logo} alt="Logo" />
                  </a>
                </div>
                <p>We are always open to discuss your project and improve your online presence.</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="footer__content-top-right">
                <h2>Lets Talk!</h2>
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <div className="footer__img">
                  <img src={Facebook} alt="Facebook" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={LinkedIn} alt="LinkedIn" />
                </div>
              </div>
            </div>
            <div className="footer__contact col-xl-5 col-md-5">
              <div className="footer__contact-email">
                <h6 className="contact">Email me at</h6>
                <p>contact@website.com</p>
              </div>
              <div className="footer__contact-number">
                <h6 className="contact">Call us</h6>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="wrapper container">
          <div className="footer__bottom-content">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="footer__bottom-rights">
                  <p>Copyright 2022, Finsweet.com</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex justify-content-end footer__menu-position">
                <div className="footer__bottom-menu">
                  <nav>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="blog.html">Blog</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;