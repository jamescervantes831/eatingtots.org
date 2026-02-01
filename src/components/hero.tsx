import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO HEIGHT (tweak to taste) */}
      <div className="relative h-[680px] md:h-[750px] w-full overflow-hidden">
        {/* Background */}
        <Image
          src="/background.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        {/* Top-left decoration */}
        <div className="absolute left-0 top-0 z-[2] w-[170px] md:w-[250px]">
          <Image
            src="/top-left.png"
            alt="decoration"
            width={250}
            height={250}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Berry bottom-left (desktop only) */}
        <div className="absolute bottom-0 left-0 z-[2] hidden md:block w-[360px] lg:w-[450px]">
          <Image
            src="/berry.png"
            alt="berries"
            width={450}
            height={450}
            className="w-full h-auto"
          />
        </div>

        {/* Logo (responsive placement) */}
        <div className="absolute z-[4] left-4 md:left-[12%] top-8 md:top-10 w-[240px] sm:w-[300px] md:w-[520px]">
          <Image
            src="/bannerLogo.png"
            alt="Eating Tots"
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Boy + boy-bg grouped together so they align */}
        <div className="absolute bottom-0 right-0 z-[3] w-[260px] sm:w-[320px] md:w-[460px] lg:w-[520px]">
          <div className="relative w-full">
            {/* Background shape behind boy */}
            <div className="absolute bottom-0 right-0 w-[90%] z-[1]">
              <Image
                src="/boy-bg.png"
                alt="background shape"
                width={450}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Boy */}
            <div className="relative z-[2]">
              <Image
                src="/boy.png"
                alt="boy"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Slogan (ONE version; no duplicates) */}
        <div className="absolute left-4 right-4 md:left-[12%] md:right-auto bottom-6 z-[5]">
          <div className="inline-block rounded-2xl border-4 border-lime-300 bg-[#0da84a] px-5 py-4 shadow-sm max-w-[520px]">
            <p className="text-white font-extrabold text-base md:text-lg leading-snug">
              Supporting Providers, Parents, and Children —{" "}
              <br className="hidden md:block" />
              every crumb in the way. 🍏
            </p>
          </div>
        </div>
      </div>

      {/* Optional small bottom band to “finish” the section */}
      <div className="h-3 w-full bg-[#0da84a]" />
    </section>
  );
}
