import Arrow from "../../assets/image/image-ourBlog/our-blog/arrow.svg"
import FirstCard from "../../assets/image/image-ourBlog/our-blog/first-card.svg"
import SecondCard from "../../assets/image/image-ourBlog/our-blog/second-card.svg"
import ThirdCard from "../../assets/image/image-ourBlog/our-blog/third-card.svg"
import FourthCard from "../../assets/image/image-ourBlog/our-blog/fourth-card.svg"
import FifthCard from "../../assets/image/image-ourBlog/our-blog/fifth-card.svg"
import SixthCard from "../../assets/image/image-ourBlog/our-blog/sixth-card.svg"

const OurBlog = () => {
  return (
    <section className="our-blog">
      <div className="wrapper container">
        <div className="our-blog__content">
          <h2>Our Blog</h2>
          <div className="row mar-b">
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={FirstCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link">
                    <a href="#">Read More</a>
                    <img src={Arrow} alt="" />
                  </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={SecondCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link">
                    <a href="#">Read More</a>
                    <img src={Arrow} alt="" />
                  </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={ThirdCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link">
                    <a href="#">Read More</a>
                    <img src={Arrow} alt="" />
                  </div>
              </div>
            </div>
          </div>
          <div className="row padd-b">
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={FourthCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link">
                    <a href="#">Read More</a>
                    <img src={Arrow} alt="" />
                  </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={FifthCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link">
                    <a href="#">Read More</a>
                    <img src={Arrow} alt="" />
                  </div>
              </div>
            </div>
            <div className="col-xl-4 col-12 d-flex justify-content-center">
              <div className="our-blog__content-block">
                <img src={SixthCard} alt="" />
                  <p className="our-blog__content-block-data">27 Jan 2021</p>
                  <h6>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h6>
                  <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                  <div className="our-blog__content-block-link mar-b-last">
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