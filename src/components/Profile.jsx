import React from 'react'

const Profile = () => {
  return (
    <div class="py-4">
    <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
       
        <img src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img>
        
        </div>
        <div class="absolute opacity-0 fd-sh group-hover:opacity-100 profHov">
       <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> 
       <div class="pt-8 text-center">
           <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
           </div>
    </div>
    </div>
    </div>
  )
}

export default Profile