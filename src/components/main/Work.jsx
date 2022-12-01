import Arrow from "../../assets/image/image-index/work/arrow.svg";
import WorkPointer1 from "../../assets/image/image-index/work/work_pointer_1.svg";
import WorkPointer2 from "../../assets/image/image-index/work/work_pointer_2.svg";
import WorkPointer3 from "../../assets/image/image-index/work/work_pointer_3.svg";
import WorkPointer4 from "../../assets/image/image-index/work/work_pointer_4.svg";

const Work = () => {
  return (
    <section className="work">
      <div className="wrapper container">
        <div className="work__content row">
          <div className="work__content-block col-xl-5">
            <div className="work__content-title">
              <h2>How we work</h2>
            </div>
            <div className="work__content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="work__content-link">
              <a href="#">Get in touch with us</a>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
          <div className="work-types col-xl-7 col-lg-12">
            <div className="type-block col-xl-5 col-lg-3">
              <div className="work-types__strategy work-types_item  mr-bottom ">
                <div className="work-types__image">
                  <img src={WorkPointer1} alt="WorkPointer1" />
                </div>
                <h5>Strategy</h5>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
              </div>
            </div>
            <div className="type-block col-xl-6 col-lg-3">
              <div className="work-types__wireframing work-types_item mr-bottom">
                <div className="work-types__image">
                  <img src={WorkPointer2} alt="WorkPointer2" />
                </div>
                <h5>Wireframing</h5>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
              </div>
            </div>
            <div className="type-block col-xl-5 col-lg-3">
              <div className="work-types__design work-types_item">
                <div className="work-types__image">
                  <img src={WorkPointer3} alt="WorkPointer3" />
                </div>
                <h5>Design</h5>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
              </div>
            </div>
            <div className="type-block col-xl-6 col-lg-3">
              <div className="work-types__development work-types_item">
                <div className="work-types__image">
                  <img src={WorkPointer4} alt="WorkPointer4" />
                </div>
                <h5>Development</h5>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;