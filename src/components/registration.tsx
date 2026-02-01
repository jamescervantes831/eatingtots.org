import React from "react";

export default function RegistrationCTA() {
  return (
    <section className="mt-16 px-4 md:px-32">
      <div className="relative overflow-hidden rounded-3xl border-4 border-lime-300 bg-[#c1ff72] px-6 py-10 md:px-12 md:py-14">
        {/* Decorative bubbles */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/40" />
        <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/30" />

        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0da84a]">
              Ready to Get Started?
            </h2>

            <p className="mt-3 text-lg font-semibold text-green-900">
              Enrolling is quick, easy, and completely free.
            </p>

            <ul className="mt-5 space-y-2 text-base font-semibold text-green-900">
              <li>🥕 Fill out our simple registration form</li>
              <li>🍎 Choose the program(s) you want to join</li>
              <li>🌟 Our team contacts you with next steps</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <a
              href="https://forms.gle/Ybe2n32C2cgtsLxb6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(0,166,81,1)_0%,rgba(141,198,63,1)_100%)] px-8 py-4 text-lg font-extrabold text-black shadow-md transition hover:scale-[1.03]"
            >
              Register Now 🚀
            </a>

            <p className="text-sm font-semibold text-green-900/70">
              Takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
