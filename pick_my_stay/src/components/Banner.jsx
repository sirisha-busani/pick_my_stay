import { banner1, banner2 } from "../assets"
import styles, { layout } from "../style"

const Banner = () => (
    <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-start p-0 mb-4 ">
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active bg-secondary"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="bg-secondary"
            ></button>

        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
                <div className="flex flex-row">
                    <div>
                        <h1 className={`${styles.heading1}`}>Lets find a <span className="text-secondary">cozy</span><br />accomodation for<br />you!</h1>
                        <p className={styles.paragraph}>
                            Book your hassle-free stay with us, based on what suits you best</p>
                    </div>
                    <div>
                        <img src={banner1} />
                    </div>
                </div>
            </div>
            <div className="carousel-item float-left w-full">
                <div class="flex flex-row">
                    <div>
                        <h1 className={`${styles.heading1}`}>Lets find a <span className="text-secondary">cozy</span><br />accomodation for<br />you!</h1>
                        <p className={styles.paragraph}>
                            Book your hassle-free stay with us, based on what suits you best</p>
                    </div>
                    <div>
                        <img src={banner2} />
                    </div>
                </div>
            </div>

        </div>
        {/* <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
    </div>)

export default Banner