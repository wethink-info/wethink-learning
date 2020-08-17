import React from "react";
// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import Tabs from "./index-sections/Tabs.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Partners from "components/Partners/Partners.js";
import Testimonials from "components/Testimonials/Testimonials.js";

function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <CompleteExamples />
          <Tabs />
          <Partners/>
          <Testimonials/>
          <Carousel />
          <NucleoIcons />
        </div>
      </div>
    </>
  );
}

export default Home;
