import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero/HeroSection'
import UrlShortener from '../components/urlshortener/UrlShortener'
import Stats from '../components/statistics/Stats'
import Boost from '../components/Boost/Boost'
import Footer from '../components/Footer/Footer'

//import Stats from '../components/statistics/Stats'


const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <UrlShortener/>
      <Stats/>
      <Boost/>
      <Footer/>

    </div>
  )
}

export default Home
