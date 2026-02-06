import React from "react";
import Image from "next/image";

const directors = [
  {
    img: "/member1.png",
    name: "Karina Ozuna",
    title: "President Chair",
    bio: `Karina holds an M.Ed. in Education and a B.A. in Early Childhood Education & Special Needs. She is CDA certified and has an Advanced Certificate in Human Resources. As founder of Vibrant Minds Curriculum, she brings educational expertise and leadership experience. With 10+ years in curriculum development—focused on inclusion and differentiated learning—she’s passionate about empowering educators and families through culturally relevant, developmentally appropriate practices.`,
  },
  {
    img: "/member2.png",
    name: "Denny Sena",
    title: "Co-Founder",
    bio: `Denny is a seasoned child care professional with ownership and operational experience across three licensed group family daycare programs as well has her child development associates certification. She holds an Associate’s degree in Accounting and combines financial acumen with hands-on early childhood care experience. She mentors new providers, streamlines compliance across sites, and leads with a focus on quality care, community trust, and sustainable programs.`,
  },
  {
    img: "/member3.png",
    name: "Jeannette Tomala",
    title: "Lead Administrator",
    bio: `Jeannette brings a strong business management background supported by an Associate’s degree. With 15+ years in clerical and administrative roles—scheduling, file management, and recordkeeping—she supports CACFP documentation and compliance needs. Known for detail and organization, she keeps systems efficient, timely, accurate, and audit-ready.`,
  },
  {
    img: "/AmandaFornal_1.jpg",
    name: "Amanda Fornal",
    title: "Board Advisor-Training, Nutrition Education",
    bio: `Amanda Fornal brings more than 25 years of experience in technology, business strategy, and organizational leadership. She works with founders and nonprofit leaders to build structure, improve operational clarity, and support sustainable growth. She is a certified executive coach through Columbia University and holds a certification in Plant-Based Nutrition focused on the science behind a plant-based diet.`,
  },
];

export default function Directors() {
  return (
    <section className="relative text-black md:px-32 px-4 md:pt-12 pb-12 bg-[url('/background.png')] md:bg-cover bg-contain bg-no-repeat bg-bottom">
      {/* Header image */}
      <div className="mx-auto max-w-5xl">
        <Image
          src="/team.png"
          alt="Our Team"
          width={1200}
          height={220}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {directors.map((d) => (
          <div
            key={d.name}
            className="rounded-3xl border-4 border-lime-300 bg-[#c1ff72] shadow-sm overflow-hidden"
          >
            <div className="p-4">
              <div className="rounded-2xl overflow-hidden bg-white">
                <Image
                  src={d.img}
                  alt={d.name}
                  width={900}
                  height={900}
                  className="w-full h-[340px] object-cover"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0da84a] leading-tight">
                      {d.name}
                    </h3>
                    <p className="text-sm font-bold text-green-900/80">
                      {d.title}
                    </p>
                  </div>

                  {/* Fun badge */}
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#0da84a] border-2 border-lime-300">
                    Board 🍏
                  </span>
                </div>

                <p className="mt-3 text-sm font-semibold text-green-900 leading-relaxed">
                  {d.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
