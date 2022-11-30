import React from 'react'

const Test = () => {
    return (
        <div class="relative">
            <div class="relative md:fixed w-full md:w-7/12 min-h-screen inset-0">
                <h1 class="absolute bottom-0 left-0 p-20 text-white text-8xl">Benny<br />The Pup</h1>
                <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80" class="object-cover w-full h-full" />
            </div>
            <div class="w-full md:w-5/12 ml-auto">
                <div class="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
                    <h2 class="text-4xl mb-5">Meet Benny</h2>
                    <p class="mb-5">I was born 20 May 2020</p>
                </div>
                <div class="bg-red-50 h-screen flex justify-center items-center flex-col p-10">
                    <h2 class="text-4xl mb-5">I love food</h2>
                    <p class="mb-5">Bones, Pallets, and more!</p>
                </div>
                <div class="bg-red-200 h-screen flex justify-center items-center flex-col p-10">
                    <h2 class="text-4xl mb-5">I love my humans</h2>
                    <p class="mb-5">My humans are super special to me, and I love them</p>
                </div>
            </div>
        </div>
    )
}

export default Test