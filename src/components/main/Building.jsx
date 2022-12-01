import Arrow from "../../assets/image/image-index/building/arrow.svg";
import HeaderSvg from "../../assets/image/image-index/building/header.svg";

const Building = () => {
  return (
    <section className="building">
      <div className="wrapper container">
        <div className="building__block row">
          <div className="building__content col-xl-5 col-lg-12">
            <div className="building__content-title">
              <h1>Building stellar websites for early startups</h1>
            </div>
            <div className="bulding__content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="building__content-buttom">
              <a href="#">View our work</a>
            </div>
            <div className="building__content-link">
              <a href="#">View Pricing</a>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
          <div className="building__content-image col-xl-7 col-lg-12 justify-content-end d-flex">
            <img src={HeaderSvg} alt="Header" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Building;