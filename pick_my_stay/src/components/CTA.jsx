import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={styles.heading2}>
      <h2 >Lets try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat turpis quis justo tincidunt, ac mollis arcu eleifend. </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
    </div>
  </section>
)

export default CTA