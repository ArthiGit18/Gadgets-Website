import React from 'react'
import Hero from '../pages/hero'
import About from '../pages/about'
import Service from '../pages/service'
import Special from '../pages/special'
import Sellers from '../pages/sellers'
import Explore from '../pages/explore'
import Testimonial from '../pages/testimonial'
import Footer from '../pages/footer'

const Main = () => {
  return (
    <div>
        <Hero />
        <About />
        <Service />
        <Special />
        <Sellers />
        <Explore />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Main