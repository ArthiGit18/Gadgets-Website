import React, { useRef } from 'react';
import Hero from '../pages/hero';
import About from '../pages/about';
import Service from '../pages/service';
import Special from '../pages/special';
import Sellers from '../pages/sellers';
import Explore from '../pages/explore';
import Testimonial from '../pages/testimonial';
import Footer from '../pages/footer';

const Main = () => {
  const aboutRef = useRef(null);

  return (
    <div>
        <Hero aboutRef={aboutRef} />
        <About ref={aboutRef} />
        <Service />
        <Special />
        <Sellers />
        <Explore />
        <Testimonial />
        <Footer />
    </div>
  );
};

export default Main;
