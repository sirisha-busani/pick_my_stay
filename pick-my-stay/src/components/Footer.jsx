import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia, contactInfo } from '../constants'

const Footer = () => {
    return (
        <footer className={`relative bg-black pt-8 pb-6 w-full mt-10`} >
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-white" style={{ fill: 'black' }}
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className='grid grid-cols-3 justify-center text-white px-10'>
                <div className='flex flex-col justify-center items-center'>
                    <img
                        src={logo}
                        alt="Pick My Stay"
                        className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p>A new way to rent hostels</p>

                </div>
                <div className='flex flex-col  items-center'>
                    <div class="text-white">

                        <p class="mb-4">
                            <a href="/about" >About Us</a>
                        </p>
                        <p class="mb-4">
                            <a href="/team">Team</a>
                        </p>
                        <p class="mb-4">
                            <a href="/partner">Partner with Us</a>
                        </p>

                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className="">
                        {contactInfo.map((contact, index) => (
                            <div className={`flex mb-4 ${index !== contactInfo.length - 1 ? "mr-6" : "mr-0"
                                }`}>
                                <img
                                    key={contact.id}
                                    src={contact.icon}
                                    alt={contact.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer mr-2 `}
                                    onClick={() => window.open(contact.text)}
                                />
                                <p>{contact.text}</p>
                            </div>

                        ))}
                        <div className="flex flex-row mt-4">
                            {socialMedia.map((social, index) => (
                                <img
                                    key={social.id}
                                    src={social.icon}
                                    alt={social.id}
                                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                        }`}
                                    onClick={() => window.open(social.link)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="grid grid-3 items-center justify-center text-white">
                <div>
                    <img
                        src={logo}
                        alt="Pick My Stay"
                        className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p>A new way to rent hostels</p>
                </div>
                <div className='flex md:flex-row flex-col place-content-between md:px-10 w-full md:-mt-6'>
                    <div className="flex flex-row justify-center">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </div>

                </div>
                <div className="flex flex-row justify-center">
                    {contactInfo.map((contact, index) => (
                        <div className={`flex ${index !== contactInfo.length - 1 ? "mr-6" : "mr-0"
                            }`}>
                            <img
                                key={contact.id}
                                src={contact.icon}
                                alt={contact.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer mr-2 `}
                                onClick={() => window.open(contact.text)}
                            />
                            <p>{contact.text}</p>
                        </div>

                    ))}
                </div>
            </div> */}


            <hr className="my-6 border-gray-400" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-white font-semibold py-1">
                        Copyright © {new Date().getFullYear()}{" "}Crispsys Technologies

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer