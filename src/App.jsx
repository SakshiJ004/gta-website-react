import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css";


function App() {

  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-75%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
    })

    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
      })
    });
  }, [showContent])

  return (
    <>
      <div className='svg fixed flex items-center justify-center top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
              <rect width='100%' height='100%' fill='black' />
              <g className='vi-mask-group'>
                <text x='50%' y='50%' fontSize='250' textAnchor='middle' fill='white' dominantBaseline='middle' fontFamily='Arial Black'>VI</text>
              </g>
            </mask>
          </defs>
          <image href='./bg.png' width='100%' height='100%' preserveAspectRatio='xMidYMid slice' mask='url(#viMask)' />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>

            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-5'>
                <div className='lines flex flex-col gap-[4px]'>
                  <div className='line w-15 h-2 bg-white'></div>
                  <div className='line w-8 h-2 bg-white'></div>
                  <div className='line w-5 h-2 bg-white'></div>
                </div>
                <h3 className='text-4xl -mt-[8px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>


            <div className='imagesdiv relative overflow-hidden w-full h-screen'>
              <img className='sky scale-[1.5] rotate-[-20deg] w-full h-full object-cover absolute top-0 left-0' src="./sky.png" alt="" />
              <img className='bg scale-[1.8] rotate-[-3deg] w-full h-full object-cover absolute top-0 left-0' src="./bg.png" alt="" />

              <div className='text text-white flex flex-col gap-2 absolute top-5 left-1/2 -translate-x-1/2 scale-[1] rotate-[-10deg]'>
                <h1 className='text-[6.5rem] leading-none -ml-30'>grand</h1>
                <h1 className='text-[6.5rem] leading-none ml-10'>theft</h1>
                <h1 className='text-[6.5rem] leading-none -ml-30'>auto</h1>
              </div>

              <img className='character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]' src="./girlbg.png" alt="" />


            </div>

            <div className='btmbar text-white w-full py-15 px-10 bg-gradient-to-t from-black to-transparent absolute left-0 bottom-0'>
              <div className='flex gap-4 items-center'>
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
              </div>

              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
            </div>
          </div>

          <div className='w-full h-screen flex items-center justify-center bg-black'>
            <div className='cntnr flex text-white w-full h-[80%]'>
              <div className='limg relative h-full w-1/2'>
                <img src="./imag.png" className='absolute scale-[.8] top-1/2 left-1/2 -translate-x-1/2
                -translate-y-1/2' alt="" />
              </div>
              <div className='rg w-[40%] py-15'>
                <h1 className='text-5xl'>Still Learning,</h1>
                <h1 className='text-5xl'>Not Hunting</h1>
                <p className='mt-10 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor, quas fugiat vitae officiis ipsam distinctio excepturi! Rem nisi, quaerat expedita culpa ipsa inventore repudiandae, numquam iste, corrupti officia modi?</p>

                <p className='mt-3 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni tenetur aspernatur laborum nostrum praesentium ipsum laboriosam modi, quibusdam non, iure exercitationem doloribus at voluptatibus nisi dignissimos voluptatem aperiam ad consectetur odio architecto minus dolorem nulla.</p>

                <button className='bg-yellow-500 px-3 py-4 mt-8 text-2xl text-black'>Download Now</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default App