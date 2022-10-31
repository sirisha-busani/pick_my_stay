import styles, { layout } from "../style"
import { feature1, roomTall } from "../assets"

const Feature3 = () => {
    return (
        <section className={`${layout.sectionReverse} bg-lightGrey px-6 my-10 md:mx-10 box-shadow rounded-[20px]`}>
            <div className='flex flex-wrap w-1/2 mr-6'>

            <div className='card-section-1'>

                    <img src={roomTall} className="block object-cover object-center w-full h-full rounded-lg" />

                </div>
                <div className='card-section-2'>
                    <div className="align-left">
                        <img src={feature1} className='block object-cover object-center w-full h-full rounded-lg overlapImg' />
                    </div>

                </div>
                

            </div>


            <div className={layout.sectionInfo}>
                <h3 className={styles.heading3}> Take your daily list of
                    <br className='sm:block hidden' />chores. And <span className='text-secondary'>tear it up</span></h3>
                <p className={`${styles.paragraph} max-w-[480px] mt-5`}>You have better things to do than wash your clothes, clean up your room and cook your meals. So our team of pros will do them all for you. </p>

            </div>




        </section>
    )
}

export default Feature3