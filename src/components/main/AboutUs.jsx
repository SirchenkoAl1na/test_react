import Jenny from "../../assets/image/image-index/aboutAs/jenny.svg";
import Arrows from "../../assets/image/image-index/aboutAs/Arrows.svg";

const AboutUs = () => {
  return (
    <section className="aboutAs">
      <div className="wrapper container">
        <div className="aboutAs__content">
          <div className="row">
            <div className="col-xl-4 col-12 block-location">
              <div className="aboutAs__content-left">
                <h2>What our clients <br />say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
              </div>
            </div>
            <div className="col-xl-8 col-12 block-location">
              <div className="aboutAs__content-right">
                <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                <div className="aboutAs__content-right-clients">
                  <div className="row">
                    <div className="clients-info col-xl-10 col-md-10 col-12">
                      <div className="image-style">
                        <img src={Jenny} alt="Jenny" />
                      </div>
                      <h6>Jenny Wilson</h6>
                      <p>Vice President</p>
                    </div>
                    <div className="clients-icon col-xl-2 col-md-2  col-12 block-location">
                      <img src={Arrows} alt="Arrows" />
                    </div>
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

export default AboutUs;