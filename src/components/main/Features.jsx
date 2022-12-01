import FirstBlock from "../../assets/image/image-index/features/first-block.svg";
import SecondBlock from "../../assets/image/image-index/features/second-block.svg";
import ThirdBlock from "../../assets/image/image-index/features/third-block.svg";
import FourthBlock from "../../assets/image/image-index/features/fourth-block.svg";
import FifthBlock from "../../assets/image/image-index/features/fifth-block.svg";
import SixthBlock from "../../assets/image/image-index/features/sixth-block.svg";

const Features = () => {
  return (
    <section className="features">
      <div className="wrapper container">
        <div className="row">
          <div className="col-xl-12 d-flex justify-content-center">
            <div className="features__header">
              <h3>Features</h3>
              <h2>Design that solves<br /> problems, one product at<br />a time</h2>
            </div>
          </div>
        </div>
        <div className="features__blocks">
          <div className="row mr-b">
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="first-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={FirstBlock} alt="FirstBlock" />
                </div>
                <h4>Uses Client First</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="second-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={SecondBlock} alt="SecondBlock" />
                </div>
                <h4>Two Free Revision Round</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="third-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={ThirdBlock} alt="ThirdBlock" />
                </div>
                <h4>Template Customization</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="fourth-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={FourthBlock} alt="FourthBlock" />
                </div>
                <h4>24/7 Support</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="fifth-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={FifthBlock} alt="FifthBlock" />
                </div>
                <h4>Quick Delivery</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="sixth-block features__blocks-style-text block-mob">
                <div className="blocks-img">
                  <img src={SixthBlock} alt="SixthBlock" />
                </div>
                <h4>Hands-on approach</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;