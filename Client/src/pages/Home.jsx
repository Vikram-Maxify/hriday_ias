import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Scholarship from '../components/Scholarship'
import WhyUs from '../components/WhyUs'
import Faculty from '../components/Faculty'
import Testimonials from '../components/Testimonials'
import Steps from '../components/Steps'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  return (
    <>
    <Navbar/>
    <Hero />
    <Scholarship />
    <WhyUs />
    <Faculty />
    <Steps />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default Home