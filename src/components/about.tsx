import React from 'react'
import Image from 'next/image'

export default function about() {
  return (
    <>
      <section className="md:pt-24 md:px-12 md:pb-0 py-12 px-4  relative">

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-4 text-black">
          <Image src="/about.png" alt="cookie" width={700} height={700} />

          <div className='grid gap-8'>
            <div className="bg-[#c1ff72] p-6 ">
              <h2 className="text-3xl font-bold text-center py-4 text-[#0da84a]">
                Who Are We?
              </h2>
              <p className="text-lg pb-3">Welcome to Eating Tots Inc!</p>
              <p className="text-lg pb-4">
                {" "}
                We are a mission-driven organization committed to making sure
                every child in family child care has access to healthy, balanced
                meals. As a CACFP sponsor (in process), we support child care
                providers across New York — starting in The Bronx — with tools,
                training, and reimbursements to serve meals that nourish little
                bodies and growing minds.
              </p>
            </div>
            <div className="bg-[#c1ff72] p-6">
              <h2 className="text-3xl font-bold text-center py-4 text-[#0da84a]">
                What We Do?
              </h2>
              <p className="text-lg pb-3">
                When you join CACFP through Eating Tots inc, you get:
              </p>
              <ul className="list-disc text-lg px-4">
                <li>Monthly reimbursements for eligible meals and snacks</li>
                <li>Ongoing training in nutrition, menu planning & compliance</li>
                <li>Simplified paperwork and personalized support</li>
                <li>Resources designed for your home daycare environment</li>
              </ul>
              <p className="text-lg pb-12">
                Whether you’re newly licensed or have been in child care for
                years, we’re here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-12 md:px-32 px-4 relative bg-[#0da84a]">
        <p className="text-white font-bold text-2xl md:w-1/2 w-full mx-auto">
          A New CACFP Sponsor is Coming Soon! 🌟
          Eating Tots Inc. is preparing to support providers like YOU!
          Join our waitlist and be the first to know when we launch!
        </p>
        <div className="absolute top-[50%] right-0">
          <Image src="/cherry.png" alt="banner" width={150} height={150} className="hidden md:block" />
        </div>
      </section>
      <section className="md:py-16 py-12 md:px-32 px-4 relative bg-[#0da84a]">
        <p className="text-white font-bold text-2xl md:w-[80%] w-full mx-auto">
          Did you know that in many neighborhoods, home daycares are the backbone of child care — supporting working families, immigrant communities, and those with the fewest resources?
        </p>
        <p className='text-white font-bold text-2xl text-center md:w-[80%] w-full mx-auto'>........................................</p>
        <p className="text-white font-bold text-2xl md:w-[80%] w-full mx-auto"> Yet these essential providers are often overlooked when it comes to funding and support.
          It’s time to change that. With the right investment, home daycares can continue to nurture children, strengthen families, and uplift entire communities.
        </p>

      </section>
      <section className='relative py-12 md:pr-32 px-4'>
        <div className='grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-8'>
          <div className='' >
            <Image src="/wraper.png" alt="cookie" width={500} height={500} className='md:block hidden' />
          </div>
          <div>
            <p className='md:text-[34px] text-2xl text-[#0da84a]'> <b>Well, guess what!</b> Eating Tots is here to shine a spotlight on our home-based providers right here in the Bronx, New York. With your support, we dedicate our mission to uplifting them — not only through the CACFP program, but also by providing the resources, recognition, and advocacy they deserve.</p>
          </div>
        </div>
        <div className='absolute bottom-0 right-0' >
          <Image src="/jouice.png" alt="cookie" width={500} height={500} className='md:block hidden' />
        </div>
      </section>
      <section className='md:px-12 px-4 pt-12 pb-52 bg-[url("/background.png")] bg-no-repeat bg-contain bg-bottom relative'>
        <div >
          <h1 className="md:text-6xl text-3xl font-bold py-6 text-black md:w-[80%] w-full mx-auto">Help us raise funding to provide: </h1>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-8 md:py-18 py-4'>
            <div className='h-[500px] flex flex-col items-center'>
              <Image src="/1.png" alt="cookie" width={500} height={500} className='w-auto h-full object-cover' />
              <p className='text-black font-bold text-xl md:px-8 px-0  py-4'>Free CPR & First Aid trainings  to keep children safe when it matters most.</p>
            </div>
            <div className='h-[500px] flex flex-col items-center'>
              <Image src="/2.png" alt="cookie" width={500} height={500} className='w-auto h-full object-cover' />
              <p className='text-black font-bold text-xl md:px-8 px-0 py-4'>Free English classes designed for childcare professionals-helping them strengthen communication, grow in their careers, and nurture bilingual learners every day.</p>
            </div>
            <div className='h-[500px] flex flex-col items-center'>
              <Image src="/3.png" alt="cookie" width={500} height={500} className='w-auto h-full object-cover' />
              <p className='text-black font-bold text-xl md:px-8 px-0 py-4'>Farm-to-Daycare Collaborations that bring fresh recipe ideas, and discounted healthy food rates directly to sponsored home-based daycare.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src="/banana1.png" alt="cookie" width={200} height={200} />
        </div>
      </section>
      <section className='md:px-12 px-4 py-12 relative h-[900px]'>
        <div className="flex flex-col items-center gap-8" >
          <p className="text-3xl py-6 text-black text-center md:w-[80%] w-full mx-auto md:block hidden">
          Your donation empowers childcare providers with the skills and <br /> resources they need to give every child the best start in life.
          </p>
          <p className="text-3xl py-6 text-black text-center w-full block md:hidden">
          Your donation empowers childcare providers with the skills and resources they need to give every child the best start in life.
          </p>
          <a className="bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] text-black md:px-16 px-8 py-4 rounded-full text-2xl">Donate today to <br />
          make an impact!</a>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src="/cereal.png" alt="cookie" width={700} height={700} />
        </div>
      </section>
      </>
  )
}
