import React from 'react'
import Image from 'next/image'

export default function header() {
  return (
    <section className="py-4 px-24 md:block hidden">
      <div className="flex justify-between items-center">
        <Image
          src="/eatingTots.png"
          alt="eatingtots"
          width={90}
          height={100}
        />
        <Image
          src="/happyFace.png"
          alt="happyFace"
          width={100}
          height={100}
        />
        <Image src="/usda.png" alt="usda" width={100} height={100} />
        <Image src="/map.png" alt="map" width={100} height={100} />
        <Image src="/logo.png" alt="logo" width={120} height={100} />
        <Image src="/american.png" alt="american" width={120} height={100} />
      </div>
    </section>
  )
}
