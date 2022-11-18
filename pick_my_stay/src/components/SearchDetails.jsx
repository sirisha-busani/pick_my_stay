import React from 'react'
import { logoSmall, googlemap } from '../assets';
import styles from '../style';
import { hostel } from '../assets';
import Footer from './Footer';

const SearchDetails = () => {
    return (
        <div>
            <div className={`${styles.paddingX} my-10`}>

                <div className='header'>
                    <div className='logoheader'>
                        <a href="/">
                            <img src={logoSmall} className="w-[124px] h-[32px]" /></a>
                    </div>
                    <div className='rightSection'>
                        <button type="" className='callbackButton'>Request Callback</button>
                    </div>
                </div>
                <div>
                    <h2 className="font-poppins font-semibold text-[32px] xs:leading-[66px] leading-[56px] w-full text-secondary">Property 1</h2>
                    <p className="font-poppins font-normal text-[18px] leading-[30.8px]">Street 3, Ameerpet , Hyderabad</p>
                </div>
                <div className='flex'>
                    <div className="w-[65%]">
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
                                    <img src={hostel} />
                                </div>
                                <div className="carousel-item float-left w-full">
                                    <img src={googlemap} />
                                </div>
                            </div>
                        </div>

                        <p>Starts from</p>
                        <h3>₹5,000/mo*</h3>
                        <div className="facilities">
                            <h2 className="w-full text-secondary sectionHeading">Amenities</h2>
                            <div className='tabsSection'>
                                <div className='tabs'>
                                    Attached Washroom
                                </div>
                                <div className='tabs'>
                                    Window
                                </div>
                                <div className='tabs'>
                                    Air Conditioning
                                </div>
                            </div>
                        </div>
                        <div className="facilities">
                            <h2 className="w-full text-secondary sectionHeading">Services</h2>
                            <div className='tabsSection'>
                                <div className='tabs'>
                                    High Speed Wifi
                                </div>
                                <div className='tabs'>
                                    Power Backup
                                </div>
                                <div className='tabs'>
                                    Professional Housekeeping
                                </div>
                                <div className='tabs'>
                                    Hot Water Supply
                                </div>

                            </div>
                        </div>
                        <div className="facilities">
                            <h2 className="w-full text-secondary sectionHeading">Details of property</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className='w-[35%] mx-10'>
                        <img src={googlemap} className='mapImg' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchDetails