import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-3">
      {/* Who / What */}
      <section className="md:pt-24 md:px-12 md:pb-0 py-12 px-4 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-4 text-black items-start">
          <Image
            src="/about.png"
            alt="About Eating Tots"
            width={700}
            height={700}
            className="w-full h-auto"
            priority
          />

          <div className="grid gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl border-4 border-lime-300 bg-[#c1ff72] p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0da84a]">
                  Who Are We?
                </h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#0da84a] border-2 border-lime-300">
                  About 🍏
                </span>
              </div>

              <p className="text-lg font-bold mt-3">
                Welcome to Eating Tots Inc!
              </p>

              <p className="text-lg mt-3 leading-relaxed">
                We are a mission-driven organization committed to making sure
                every child in family child care has access to healthy, balanced
                meals. As a CACFP sponsor{" "}
                <span className="font-extrabold">(in process)</span>, we support
                child care providers across New York — starting in The Bronx —
                with tools, training, and reimbursements to serve meals that
                nourish little bodies and growing minds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border-4 border-lime-300 bg-[#c1ff72] p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0da84a]">
                  What We Do?
                </h2>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#0da84a] border-2 border-lime-300">
                  Support 🥦
                </span>
              </div>

              <p className="text-lg font-bold mt-3">
                When you join CACFP through Eating Tots Inc, you get:
              </p>

              <ul className="mt-4 grid gap-2 text-lg font-semibold text-green-900">
                <li>✅ Monthly reimbursements for eligible meals and snacks</li>
                <li>✅ Training in nutrition, menu planning, & compliance</li>
                <li>✅ Simplified paperwork and personalized support</li>
                <li>✅ Resources designed for your home daycare environment</li>
              </ul>

              <p className="text-lg mt-5 font-semibold">
                Whether you’re newly licensed or have been in child care for
                years, we’re here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA (cleaner + more fun) */}
      <section className="relative bg-[#0da84a] md:py-16 py-12 md:px-32 px-4 overflow-hidden">
        {/* decorative bubbles */}
        <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-14 -right-14 h-56 w-56 rounded-full bg-white/10" />

        <div className="relative z-10 mx-auto max-w-5xl grid md:grid-cols-[1.4fr_.6fr] gap-8 items-center">
          <div className="rounded-3xl border-4 border-lime-300 bg-white/10 px-6 py-7">
            <p className="text-white font-extrabold text-2xl md:text-3xl leading-snug">
              A New CACFP Sponsor is Coming Soon! 🌟
            </p>
            <p className="mt-3 text-white/90 font-semibold text-lg">
              Eating Tots Inc. is preparing to support providers like YOU. Join
              our waitlist and be the first to know when we launch.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href="https://forms.gle/Ybe2n32C2cgtsLxb6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] px-8 py-4 text-lg font-extrabold text-black shadow-md transition hover:scale-[1.03]"
            >
              Join Waitlist 🚀
            </a>

            <p className="text-white/90 font-semibold text-sm">
              Takes less than 2 minutes
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:block">
            <Image src="/cherry.png" alt="Cherry" width={150} height={150} />
          </div>
          <div className="mx-auto max-w-5xl">
            <p className="text-white font-extrabold text-2xl md:text-3xl leading-snug">
              Did you know home daycares are the backbone of child care?
            </p>
            <p className="mt-3 text-white/90 font-semibold text-lg">
              They support working families, immigrant communities, and
              neighborhoods with the fewest resources.
            </p>

            <div className="my-8 h-2 w-28 rounded-full bg-[rgba(141,198,63,1)]" />

            <p className="text-white font-semibold text-lg leading-relaxed">
              Yet these essential providers are often overlooked when it comes
              to funding and support. It’s time to change that. With the right
              investment, home daycares can continue to nurture children,
              strengthen families, and uplift entire communities.
            </p>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="relative py-12 md:pr-32 px-4 overflow-hidden">
        <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-8 items-center">
          <div>
            <Image
              src="/wraper.png"
              alt="Wrapper"
              width={500}
              height={500}
              className="md:block hidden"
            />
          </div>

          <div className="rounded-3xl border-4 border-lime-300 bg-[#c1ff72] p-6 shadow-sm">
            <p className="md:text-[34px] text-2xl text-[#0da84a] font-extrabold">
              Well, guess what! 🎉
            </p>
            <p className="mt-4 md:text-[28px] text-xl text-green-900 font-semibold leading-relaxed">
              Eating Tots is here to shine a spotlight on home-based providers
              in the Bronx, New York. With your support, we uplift them —
              through CACFP and beyond — by providing resources, recognition,
              and advocacy they deserve.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden md:block">
          <Image src="/jouice.png" alt="Juice" width={500} height={500} />
        </div>
      </section>

      {/* Funding cards */}
      <section className='md:px-12 px-4 pt-12 pb-52 bg-[url("/background.png")] bg-no-repeat bg-contain bg-bottom relative'>
        <div>
          <h1 className="md:text-6xl text-3xl font-extrabold py-6 text-black md:w-[80%] w-full mx-auto">
            Help us raise funding to provide:
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:py-18 py-4">
            {[
              {
                img: "/1.png",
                text: "Free CPR & First Aid trainings to keep children safe when it matters most.",
                tag: "Safety 🩺",
              },
              {
                img: "/2.png",
                text: "Free English classes designed for childcare professionals—strengthening communication and career growth.",
                tag: "Learning 📚",
              },
              {
                img: "/3.png",
                text: "Farm-to-Daycare collaborations with fresh recipe ideas and discounted healthy food rates.",
                tag: "Fresh Food 🥕",
              },
            ].map((item) => (
              <div
                key={item.img}
                className="rounded-3xl border-4 border-lime-300 bg-white p-5 shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#c1ff72] px-3 py-1 text-xs font-extrabold text-green-900 border-2 border-lime-300">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-4 rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt="Program"
                    width={500}
                    height={500}
                    className="w-full h-[280px] object-cover"
                  />
                </div>

                <p className="text-black font-bold text-xl mt-4 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image src="/banana1.png" alt="Banana" width={200} height={200} />
        </div>
      </section>
    </div>
  );
}
