import { feature1, feature2, feature3 } from '../assets'
import styles, { layout } from '../style'

const Feature1 = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} bg-lightGrey px-6 my-10 md:mx-10 box-shadow rounded-[20px]`}>

      <div className="flex flex-wrap w-1/2 mr-6">
        <div className="w-1/2 p-1">
          <div className="w-full h-full">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={feature1} />
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-1">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={feature2} />
          </div>
          <div className="p-1">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={feature3} />
          </div>
        </div>

      </div>


      {/* <div className={`${layout.sectionImgReverse} card-display-1` }>
      <div className='card-section-1'>
        <img src={buildingTall}/>

      </div>
      <div className='card-section-2'>
        <div className='img-1'>
            <span className=''><img src={corridor}/></span>
        
        </div>
        <div className='img-2'>
        <span className=''><img src={corridor}/></span>
        </div>
      </div>
    </div> */}

      <div className={layout.sectionInfo}>
        <h3 className={styles.heading3}>Start living your best life <br className="sm:block hidden" /> from <span className="text-secondary"> day one.</span></h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.
        </p>

      </div>
    </section>
  )
}

export default Feature1