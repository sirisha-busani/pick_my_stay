import React from 'react'
import styles from '../style'
import {Navbar,Hero,Feature1,Feature2,Feature3,Footer,Stats,Intro} from '../components'

const Home = () => {
  return (

    <div>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        <Stats/>
        <Intro/>
       
        <Feature1/>
        <Feature2/>
        <Feature3/>
        </div>
        </div>
      <Footer/>
      
      
      
    </div>
  )
}

export default Home