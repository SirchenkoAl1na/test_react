import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseStudy from "../components/blog/CaseStudy";
import OurBlog from "../components/blog/OurBlog";

const Blog = () => {
  return (
    <div>
      <Header />
      <main>
        <CaseStudy />
        <OurBlog />
      </main>
      <Footer />
    </div>
  )
}

export default Blog;