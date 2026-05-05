import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScholarshipPopup from "./ScholarshipPopup";
import { GraduationCap, BookOpen, ClipboardList } from "lucide-react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative py-12 md:py-20 flex items-center px-4 overflow-hidden bg-background"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-radial-top from-primary/10 via-background to-background z-0" />

        <motion.div
          className="relative z-10 max-w-[93rem] mx-auto w-full grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant border border-accent/30 mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-primary text-xs uppercase tracking-widest font-medium">
                Limited Seats
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-headline text-[2.2rem] sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-4 leading-[1.2]">
              Crack UPSC with Hriday IAS <br />
              <span className="text-primary block mt-1">
                Get Up to 100% Scholarship
              </span>
            </h1>
 
            {/* Description */}
            <p className="text-base text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-6">
              Give the Scholarship Test & unlock exclusive discounts based on your
              rank. Join aspirants who achieved IAS, IPS, and top civil services.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 justify-center md:justify-start flex-wrap gap-6 mb-6">
  {[
    { value: "500+", label: "Students" },
    { value: "50+", label: "Experts" },
    { value: "15+", label: "Years Experience" },
  ].map((item, i) => (
    <div
      key={i}
      className="flex flex-col  items-center  bg-surface border border-accent/20 px-4 justify-center py-2 rounded-xl"
    >
      <span className="text-2xl md:text-3xl font-bold text-primary">
        {item.value}
      </span>
      <span className="text-sm  text-on-surface-variant">
        {item.label}
      </span>
    </div>
  ))}
</div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">

  {/* MAIN CTA */}
  <button
    onClick={() => setOpen(true)}
    className="w-full sm:w-auto bg-primary text-white font-bold px-6 py-3 rounded-full shadow-button hover:scale-105 transition"
  >
    Register for Scholarship Test
  </button>

  {/* Check Eligibility */}
  <a
    href="#location"
    className="w-full sm:w-auto text-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-surface-variant transition"
  >
    Check Eligibility
  </a>

</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block relative">
            <div className="relative rounded-xl overflow-hidden border border-accent/30 shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
                alt="UPSC"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-white font-medium text-sm">
                  Expert Guidance for Civil Services
                </p>
                <p className="text-accent text-xs">
                  Start your journey today
                </p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-primary text-white font-bold px-3 py-1.5 rounded shadow-button text-xs">
              🏆 #1 Coaching
            </div>
          </div>
        </motion.div>
      </section>

      {/* POPUP */}
      <ScholarshipPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;