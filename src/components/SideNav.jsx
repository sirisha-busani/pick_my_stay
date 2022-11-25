import React from 'react'

const SideNav = ({icon, title, content}) => {
    return (
        
            <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs mainDiv mb-4 rounded-xl">
                <p className='absolute top-4 left-2 text-black font-semibold'>{title}</p>
                <img src={icon} class="max-w-xs" alt="Louvre" />
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"><div class="innerDiv opacity-0 text-white text-center pt-1 px-2">
                    {content}
                </div></div>
            </div>
    )
}

export default SideNav