import SignReserved from "../../assets/image/image-index/faq/sign-reserved.svg";
import Sign from "../../assets/image/image-index/faq/sign.svg";

const Faq = () => {
  const faqItems = [
    { 
      cssClass: "faq__first",
      header: "How much time does it take?", 
      isOpened: true,
      body: () => (<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>)
    },
    { 
      cssClass: "faq__second",
      header: "What is your className naming convention?", 
      body: null, 
      isOpened: false
    },
    { 
      cssClass: "faq__third",
      header: "How do you communicate?", 
      body: null, 
      isOpened: false
    },
    { 
      cssClass: "faq__fourth",
      header: "I have a bigger project. Can you handle it?", 
      body: null, 
      isOpened: false
    },
    { 
      cssClass: "faq__fifth",
      header: "What is your className naming convention?", 
      body: null, 
      isOpened: false
    },
  ]

  return (
    <section className="faq">
      <div className="wrapper container">
        <div className="faq__content">
          <div className="row">
            <div className="col-xl-4 col-12 block-location">
              <div className="faq__content-left">
                <h2>Frequently asked questions</h2>
                <p>Contact us for more info</p>
              </div>
            </div>
            <div className="col-xl-8 col-12 block-location">
              <div className="faq__content-right">
                {faqItems.map((item, index) => (
                  <div key={`faq-${index}`} className={`${item.cssClass} faq__item`}>
                    <div>
                      <h5>0{index + 1}</h5>
                      <h6>{item.header}</h6>
                      {item.isOpened && item.body()}
                    </div>
                    <img src={item.isOpened ? SignReserved : Sign} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;