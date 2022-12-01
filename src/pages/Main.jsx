import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutUs from "../components/main/AboutUs";
import Building from "../components/main/Building";
import Features from "../components/main/Features";
import View from "../components/main/View";
import Work from "../components/main/Work";
import Faq from "../components/main/Faq";
import Inquiry from "../components/main/Inquiry";
import OurBlog from "../components/main/OurBlog";

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <Building />
        <Work />
        <View />
        <Features />
        <AboutUs />
        <Faq />
        <Inquiry />
        <OurBlog />
      </main>
      <Footer />
    </div>
  )
}

export default Main;