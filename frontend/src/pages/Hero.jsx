import React from 'react'
import AboutUs from '../Components/AboutUs'
import WhyUs from '../Components/WhyUs'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Spline from '@splinetool/react-spline';


const Hero = () => {
    return (
      <div className="bg-zinc-900 min-h-screen w-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Welcome to the Hero Component</h1>

        <Spline scene="https://prod.spline.design/LGDOtQhUeeENi0S8/scene.splinecode" />


        <AboutUs/>
        <WhyUs/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  };

export default Hero
