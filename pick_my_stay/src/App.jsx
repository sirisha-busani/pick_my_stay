import React from 'react'
import styles from './style'

import {Navbar, Hero, Stats,Intro, Business,Billing,CardDeal,Testimonials,Clients,CTA, Footer, Feature1 , Feature2 , Feature3}  from './components'

import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

const options = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
      type: 'group',
      name: 'Group name',
      items: [
          {name: 'Spanish', value: 'es'},
      ]
  },
];

const App = () => {
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
        <SelectSearch options={options}  name="language" placeholder="Choose your language" />
        <Feature1/>
        <Feature2/>
        <Feature3/>
        </div>
        </div>
      <Footer/>
      
      
      {/* <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div> */}
      {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div> */}
    </div>
  )
}

export default App