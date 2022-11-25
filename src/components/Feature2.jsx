import React from 'react'
import { feature1, feature2 } from '../assets'
import styles, { layout } from '../style'

const Feature2 = () => {
  return (
    <section id="product" className={layout.section}>

<div className={layout.sectionInfo}>
        <h3 className={styles.heading3}> Step into a room that has
          <br className='sm:block hidden' /> <span className='text-secondary'>room for everything</span></h3>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Your clothes and bag will not be fighting for space on the same chair. At Stanza Living, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home. </p>

      </div>
        
        <div className='flex flex-wrap md:w-1/2 w-full ml-6 my-6 items-center'>
        <div className="w-1/2 p-1 -mr-16 z-10">
          
          <img alt="gallery" className="block object-cover object-center w-full h-1/2 rounded-lg  border-solid border-white border-8 "
            src={feature1} />
       
      </div>
        <div className="w-1/2 p-1">
          
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg border-white border-8"
              src="https://images.unsplash.com/photo-1551133988-6a0047afdffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         
        </div>
            
        </div>
        
    </section>
  )
}

export default Feature2