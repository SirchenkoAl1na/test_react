import Arrow from "../../assets/image/image-index/view/arrow.svg";
import Workhub from "../../assets/image/image-index/view/workhub.svg";
import Arrow2 from "../../assets/image/image-index/view/arrow2.svg";
import Unisaas from "../../assets/image/image-index/view/unisaas.svg";
import Church1 from "../../assets/image/image-index/view/church1.svg";

const View = () => {
  return (
    <section className="view">
      <div className="wrapper container">
        <div className="view__content">
          <div className="view__header row">
            <div className="col-lg-10 col-md-9 col-sm-12">
              <h2 className="view__title">View our projects</h2>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="view__link">
                <a href="#">View More</a>
                <img src={Arrow} alt="Arrow" />
              </div>
            </div>
          </div>
          <div className="view__image">
            <div className="row">
              <div className=" workhub col-xl-8 col-lg-12 d-flex justify-content-start">
                <div className="view__workhub">
                  <div className="view__workhub-background">
                    <img src={Workhub} alt="Workhub" />
                    <div className="overlay"></div>
                  </div>
                  <div className="view__workhub-top-text">
                    <h4>Workhub office Webflow Webflow Design</h4>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                    <div className="view__workhub-top-text-link">
                      <a href="#">View project</a>
                      <img src={Arrow2} alt="Arrow2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="unisaas col-xl-4 col-lg-12 d-flex justify-content-end">
                <div className="view__unisaas-block">
                  <div className="view__image">
                    <img src={Unisaas} alt="Unisaas" />
                  <div className="overlay-unisaas"></div>
                  </div>
                  <div className="view__unisas-block-text">
                    <h4>Unisaas Website<br /> Design</h4>
                    <div className="view__unisaas-link">
                      <a href="#">View portfolio</a>
                      <img src={Arrow2} alt="Arrow2" />
                    </div>
                  </div>
                  <div className="view__image-church">
                    <img src={Church1} alt="Church1" />
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

export default View;