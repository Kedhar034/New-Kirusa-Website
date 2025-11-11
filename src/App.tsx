
import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import OurServices from "./components/OurServices";

const App: React.FC = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
      lerp: 0.1,
    });
  
    const cleanup = (): void => {
      scroll.destroy();
    };
  
    return cleanup;
  }, []);
  

  return (
    <>
      <Navbar />
      <div
        data-scroll-container
        className="font-body bg-kirusa-lightGrey text-kirusa-grey min-h-screen"
      >
      
        <section data-scroll-section>
          <LandingPage />
        </section>

        <section data-scroll-section>
          <ProductSection />
        </section>

        <section data-scroll-section>
          <OurServices />
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
