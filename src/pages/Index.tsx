
import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Founders />
      <Services />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
