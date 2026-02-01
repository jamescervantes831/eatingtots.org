import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0da84a] md:px-32 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        {/* Top divider */}
        <div className="mb-6 h-1 w-24 rounded-full bg-[#c1ff72] mx-auto md:mx-0" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[#c1ff72] text-center md:text-left">
          {/* Left */}
          <div className="space-y-1 text-sm font-semibold">
            <p className="font-extrabold">© 2025 Eating Tots Inc.</p>
            {/* <p>
              Nonprofit EIN: <span className="font-bold">[Your EIN]</span>
            </p> */}
            <p className="opacity-90">Privacy Policy · Terms & Conditions</p>
          </div>

          {/* Right */}
          <div className="space-y-1 text-sm font-semibold">
            <p>Contact Us</p>
            <p>
              📞 <span className="font-bold">475-265-6009</span>
            </p>
            <p>
              ✉️{" "}
              <a
                href="mailto:theoffice@eatingtots.org"
                className="underline underline-offset-4 hover:opacity-90"
              >
                theoffice@eatingtots.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
