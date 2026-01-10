import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "./Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />   {/* ✅ NEW */}
      <Products featured/>
      <Footer />
    </>
  );
}

export default Home;
