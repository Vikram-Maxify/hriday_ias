import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScholarshipPopup from "./ScholarshipPopup";

const Hero = () => {
  const [open, setOpen] = useState(false);

  // Auto-open only if not filled before
  useEffect(() => {
    const saved = localStorage.getItem("hriday_ias_form");
    if (!saved) {
      const timer = setTimeout(() => setOpen(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

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
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              {[
                { value: "500+", label: "Selections" },
                { value: "50+", label: "Top Ranks" },
                { value: "15+", label: "Years Experience" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface border border-accent/20 shadow-soft px-4 py-2 rounded-xl"
                >
                  <div className="text-xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">

              {/* 🔥 MAIN CTA (opens popup) */}
              <button
                onClick={() => setOpen(true)}
                className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow-button hover:scale-105 transition"
              >
                Register for Scholarship Test
              </button>

              <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-surface-variant transition">
                Check Eligibility
              </button>

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