import Arrow from "../../assets/image/image-index/inquiry/arrow.svg";

const Inquiry = () => {
  return (
    <section className="inquiry">
      <div className="wrapper container">
        <div className="inquiry__content">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center padd-r">
              <div className="inquiry__content-left">
                <div className="inquiry__text_style">
                  <h2 >Building stellar websites for early startups</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12 d-flex justify-content-center padd-l">
              <div className="inquiry__content-right">
                <div className="inquiry__content-right-top">
                  <h3>Send inquiry</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className="inquiry__content-right-bottom">
                  <div className="yourName">
                    <p>Your Name</p>
                  </div>
                  <div className="email">
                    <p>Email</p>
                  </div>
                  <div className="url">
                    <p>Paste your Figma design URL</p>
                  </div>
                  <div className="inquiry-button">Send an Inquiry</div>
                  <div className="inquiry-link">
                    <a href="#">Get in touch with us</a>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inquiry;