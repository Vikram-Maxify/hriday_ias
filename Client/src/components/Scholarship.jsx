import React from "react";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const Scholarship = () => {
  return (
    <section
      id="scholarship"
      className="py-8 px-4 -mt-6 relative z-10 bg-background"
    >
      <motion.div
        className="max-w-[93rem] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-3">
            Scholarship Rewards Based on Rank
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Your performance defines your reward. Secure top ranks for maximum benefits.
          </p>
        </div>

        {/* Grid */}
        <div className=" gap-5">

          {/* Rank 1 (Highlight Card) */}
          <div className="bg-surface border border-accent shadow-premium p-8 rounded-xl flex flex-col items-center text-center lg:col-span-3 lg:w-2/3 mx-auto hover:-translate-y-2 transition-all">

            {/* Icon */}
            <div className="bg-accent w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md">
              <FaCrown className="text-primary text-xl" />
            </div>

            <h3 className="font-headline text-xl font-bold text-primary mb-2">
              Rank 1
            </h3>

            <div className="text-4xl font-extrabold text-primary mb-3">
              100% Scholarship
            </div>

            <p className="text-on-surface-variant text-sm">
              Free Education - Complete Course Covered
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 w-full mt-2">
            {/* Rank Cards */}
            {[
              { rank: "Rank 2", value: "90% Off" },
              { rank: "Rank 3", value: "80% Off" },
              { rank: "Rank 4", value: "70% Off" },
              { rank: "Rank 5", value: "60% Off" },
              { rank: "Rank 6-10", value: "50% Off" },
              { rank: "Rank 10+", value: "15% Off" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface border border-accent/30 p-5 rounded-xl 
    hover:shadow-premium hover:-translate-y-0.5 
    transition-all duration-300"
              >
                <h3 className="font-headline text-lg font-bold text-primary mb-1">
                  {item.rank}
                </h3>
                <div className="text-2xl font-extrabold text-on-surface">
                  {item.value}
                </div>
              </div>
            ))}
          </div>


        </div>
      </motion.div>
    </section>
  );
};

export default Scholarship;