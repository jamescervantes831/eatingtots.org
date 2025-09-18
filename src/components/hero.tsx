import React from 'react'
import Image from 'next/image'
export default function hero() {
  return (
    <section className="relative">
      <div className="relative">
        <div className="">
          <Image
            src="/background.png"
            alt="banner"
            width={1920}
            height={1080}
            className="object-cover w-full h-[750px]"
          />
        </div>
        <div className="absolute top-[0%] md:left-[15%] left-0 z-[4]">
          <Image
            src="/bannerLogo.png"
            alt="banner"
            width={800}
            height={800}
          />

        </div>
        <div className="absolute bottom-0 right-0 z-[3]">
          <Image
            src="/boy.png"
            alt="banner"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute bottom-0 right-0 z-[1]">
          <Image
            src="/boy-bg.png"
            alt="banner"
            width={450}
            height={500}
          />
        </div>
        <div className="absolute top-0 left-0">
          <Image
            src="/top-left.png"
            alt="banner"
            width={250}
            height={250}
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/berry.png"
            alt="banner"
            width={450}
            height={450}
            className='hidden md:block'
          />
        </div>
        <div className="absolute bottom-[15%] right-0 w-[65%] z-[2]">
          <p className='md:block hidden text-white font-bold text-xl bg-[#0da84a] px-4 py-8 '>Supporting Providers , Parents, and Children  every crumb in the way.....</p>
        </div>
      </div>
      <div className="md:hidden block">
          <p className='text-white font-bold text-xl bg-[#0da84a] px-4 py-8 '>Supporting Providers , Parents, and Children  every crumb in the way.....</p>
        </div>
    </section>
  )
}
