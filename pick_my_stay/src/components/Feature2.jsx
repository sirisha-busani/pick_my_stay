import styles, { layout } from '../style'
import { feature1, feature2, feature3, bedShort, bedTall,roomTall } from '../assets'
const Feature2 = () => {
  return (
    <section className={`${layout.section} bg-lightGrey px-6 my-10 md:mx-10 box-shadow rounded-[20px]`}>


      <div className={layout.sectionInfo}>
        <h3 className={styles.heading3}> Step into a room that has
          <br className='sm:block hidden' /> <span className='text-secondary'>room for everything</span></h3>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Your clothes and bag will not be fighting for space on the same chair. At Stanza Living, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home. </p>

      </div>

      {/* <div className="flex flex-wrap w-1/2 mr-6 flex-row">
        <div className="">
          <div className="p-1">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={bedShort} />
          </div>
        </div>

        <div className="">
          <div className="w-full h-full">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={bedTall} />
          </div>


        </div>


      </div> */}
      <div className="flex flex-wrap w-1/2 items-center ">
        <div className="w-1/2">
          <div className="">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg overlapImg"
              src={feature2} />
          </div>
          
        </div>
        <div className="w-1/2">
          <div className="">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
              src={roomTall} />
          </div>
        </div>


      </div>
      {/* <div className={`${layout.sectionImg} `}>
   
        <div className=''>
          <div className=' align-right'>
            <span className=''><img src={feature2} className='overlapImg' /></span>

          </div>
        </div><div className=''>
          <img src={feature1} />

        </div> 

      </div> */}

    </section>
  )
}

export default Feature2