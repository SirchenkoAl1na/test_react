import Arrow from "../../assets/image/image-index/ourBlog/arrow.svg";
import FirstCard from "../../assets/image/image-index/ourBlog/first-card.svg";
import SecondCard from "../../assets/image/image-index/ourBlog/second-card.svg";
import ThirdCard from "../../assets/image/image-index/ourBlog/third-card.svg";

const OurBlog = () => {
  return (
    <section className="ourBlog">
      <div className="wrapper container">
        <div className="ourBlog__content">
          <h2>Our blog</h2>
          <div className="row">
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="ourBlog__content-first-block">
                <img src={FirstCard} alt="" />
                <p className="ourBlog__content-first-block-data">19 Jan 2022</p>
                <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="ourBlog__content-first-block-link">
                  <a href="#">Read More</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="ourBlog__content-second-block">
                <img src={SecondCard} alt="" />
                <p className="ourBlog__content-second-block-data">19 Jan 2022</p>
                <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="ourBlog__content-second-block-link">
                  <a href="#">Read More</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="ourBlog__content-third-block">
                <img src={ThirdCard} alt="" />
                <p className="ourBlog__content-third-block-data">19 Jan 2022</p>
                <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="ourBlog__content-third-block-link">
                  <a href="#">Read More</a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBlog;