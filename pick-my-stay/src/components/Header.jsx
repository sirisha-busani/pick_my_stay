import React from 'react'
import { logoSmall } from '../assets';
import styles from '../style';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { phone,search } from '../assets';

function Header() {
  const navigate = useNavigate();
  const navigateSearch = () => {
    // 👇️ navigate to /
    navigate('/search/');
  };
  return (
    <div className='header my-10'>
      <div className='logoheader'>
        <a href="/">
          <img src={logoSmall} className="w-[153px] h-[60px]" /></a>
      </div>
      

      <div className='rightSection'>
      <div class="flex justify-center mr-4">
          <div class="xl:w-96">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button class="btn  bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" onClick={navigateSearch}>
                <img src={search} className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </div>
       
      <img src={phone} className="bg-secondary rounded-full w-10 h-10 p-2 mx-2 md:hidden" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"/>
      
        <button type="" className='callbackButton md:flex hidden' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Contact Us</button>
        
      </div>



      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium  text-gray-800" id="exampleModalScrollableLabel">
                Contact Us
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4 rounded shadow-lg  m-4 modalBg">
              {/* <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md"> */}
              <form>
                <div class="grid grid-cols-2 gap-4">
                  <div class="form-group mb-6">
                    <input type="text" class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleInput123"
                      aria-describedby="emailHelp123" placeholder="First name" />
                  </div>
                  <div class="form-group mb-6">
                    <input type="text" className={`${styles.inputStyle}`}
                      id="exampleInput124"
                      aria-describedby="emailHelp124" placeholder="Last name" />
                  </div>
                </div>
                <div class="form-group mb-6">
                  <input
                    type="tel"
                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleTel0"
                    placeholder="Mobile Number"
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div class="form-group form-check mb-6 flex">
                  <input type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck25" checked />
                  <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">By Clicking on the button I agree to the <u><a href="/terms" target="_blank" className='font-bold text-secondary'>Terms & Conditions</a></u></label>
                </div>
                <button type="submit" class="bg-secondary text-white w-full px-20">Request Callback</button>
              </form>
              {/* </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header