import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Register", desc: "Sign up for the upcoming scholarship test online." },
  { title: "Take Exam", desc: "Appear for the test at our offline center." },
  { title: "Get Rank", desc: "Receive your detailed performance analysis and rank." },
  { title: "Unlock Scholarship", desc: "Claim your fee waiver and start your UPSC preparation." },
];

const Steps = () => {
  return (
    <section className="py-4 px-4 bg-background">
      <motion.div
        className="max-w-[85rem] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-3">
            Your Path to Success
          </h2>
          <p className="text-on-surface-variant">
            Simple steps to start your journey with maximum benefits.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-accent/40" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col md:flex-row items-center"
              >

                {/* CARD */}
                <div
                  className={`w-full md:w-1/2 flex ${i % 2 === 0
                      ? "justify-end md:pr-2"
                      : "justify-start md:pl-2 md:order-2"
                    }`}
                >
                  <div
                    className={`bg-surface border border-accent/20 p-5 md:p-6 rounded-xl shadow-soft hover:shadow-premium transition max-w-md w-full ${i % 2 === 0 ? "md:text-right" : "md:text-left"
                      } ${step.title === "Unlock Scholarship"
                        ? "border-accent shadow-premium"
                        : ""
                      }`}
                  >
                    <h3 className="font-headline text-lg font-bold text-primary pt-3 mb-1">
                      {i + 1}. {step.title}
                    </h3>

                    <p className="text-on-surface-variant text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* CENTER DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border-4 border-background bg-primary text-white shadow-lg">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2"></div>

              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Steps;