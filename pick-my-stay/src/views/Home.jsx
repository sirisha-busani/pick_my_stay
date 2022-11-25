import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Intro from '../components/Intro'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'
import Feature3 from '../components/Feature3'
import SideNav from '../components/SideNav'
import { productCard } from '../constants'
import { layout } from '../style'
import Carousel from '../components/Carousel'



function Home() {
  return (
    <div>
      <div className="container">
        <Header></Header>
        </div>
        <div className='bg-gradient-to-b from-red-100 pt-10'>
          <div class="container">
        <div className='flex md:flex-row flex-col'>
          <div className='md:w-2/3 w-full'><Carousel/></div>
        <div className={`${layout.sectionImg} flex-col md:w-1/3 w-full`}>
        {productCard.map((product,index)=>(
          <SideNav key={product.id} {...product} index={index}/>
        ))}
        </div>
      </div>
        <div>
          <Stats/>
          <Intro/>
          <Feature1/>
          <Feature2/>
          <Feature3/>
          

          {/* <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
              <div class="flex">
              
              <h1>This is some text</h1>
              <img class=" w-1/2 h-96 md:h-auto object-cover rounded-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
            </div>
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}
          {/* <div class="flex justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home