import PeopleWorkingInFrontOfComputer from "../../assets/image/image-ourBlog/case-study/people-working-in-front-of-computer.svg";

const CaseStudy = () => {
  return (
    <section className="case-study">
      <div className="wrapper container">
        <div className="case-study__content">
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              <div className="case-study__content-posted">
                <p className="person">Andrew Jonson</p>
                <p className="data">Posted on 27th January 2021</p>
              </div>
            </div>
          </div>
          <div className="case-study__content-background">
            <img src={PeopleWorkingInFrontOfComputer} alt="" />
          </div>
          <div className="row">
            <div className="col-xl-12 d-flex justify-content-center">
              <div className="case-study__content-text">
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy;