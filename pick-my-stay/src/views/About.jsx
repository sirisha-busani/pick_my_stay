import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles,{layout} from '../style'

const About = () => {
    return (
        <div>
        <div className='container'>
            <Header />
        </div>
        <div class="bg-gradient-to-b from-red-100 pt-10">
            <div className='container'>
            <div className='flex flex-col items-center'>
                <h1 class={`${styles.heading2} text-center font-semibold mb-6 text-secondary`}>About Us</h1>
                <p className={`${styles.paragraph} w-2/3`}>Whatever we've achieved in the past few years has been made possible due to the mutual support and cooperation of the people we proudly call our partners. If you too wish to make your property earn to the best of its ability, find captive mainspace for your products or services, and/or provide the best living experience for your people, you've come to the right place.</p>
            </div>
            <section id="product" className={layout.section}>

                <div className={layout.sectionInfo}>
                    <h3 className={styles.heading3}> Your property in the <span className='text-secondary'></span> right hands</h3>
                    <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Your clothes and bag will not be fighting for space on the same chair. At Stanza Living, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home. </p>

                </div>

                <div className='flex flex-wrap md:w-1/2 w-full ml-6 my-6 items-center'>
                    
                   

                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg border-white border-8"
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80" />


                </div>

            </section>
            </div>
           
        </div>
        <Footer />
        </div>
    )
}

export default About