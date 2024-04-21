import React from 'react'
import vid from './assets/Hero.mp4'
import abtimg from './assets/abtimg.jpg'

const Hero = ({ vidsrc }) => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="  inset-0 flex flex-col items-center justify-center bg-black ">
        {/* Video element */}
        <video
          className=" -mt-28 border-0 padding-0 margin-0 object-cover"
          autoPlay
          loop
          muted
        >
          <source src={vidsrc} type="video/mp4" />
        </video>
      </div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="flex flex-col absolute inset-0 flex items-center justify-center text-white">
        <h1 class=" m-4 text-5xl font-bold">
          Cultivating Spaces, Crafting Dreams:
        </h1>
        <h1 class=" text-5xl font-bold">Where Your Home Journey Begins</h1>
        {/* <p class="mt-2">
          This is an example of a black translucent filter over a video in
          Tailwind CSS.
        </p> */}
      </div>
    </>
  )
}

export default Hero
