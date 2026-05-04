import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUsers,
  FaBookOpen,
  FaClipboardList,
  FaChartLine,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    title: "Expert Faculty",
    icon: <FaGraduationCap />,
    desc: "Learn from educators with deep UPSC experience and subject mastery.",
  },
  {
    title: "Personalized Mentorship",
    icon: <FaUsers />,
    desc: "One-on-one guidance to tailor your strategy and track progress.",
  },
  {
    title: "Updated Study Material",
    icon: <FaBookOpen />,
    desc: "Comprehensive, latest syllabus-aligned notes and resources.",
  },
  {
    title: "Regular Mock Tests",
    icon: <FaClipboardList />,
    desc: "Simulate exam conditions and get detailed performance analytics.",
  },
  {
    title: "Proven Track Record",
    icon: <FaChartLine />,
    desc: "Consistent results with top ranks in recent UPSC selections.",
  },
  {
    title: "Affordable Learning",
    icon: <FaWallet />,
    desc: "Premium education made accessible through scholarships and fair pricing.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="whyus"
      className="py-4 px-4 bg-background relative z-10"
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
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Why Choose Hriday IAS?
          </h2>

          <p className="text-black">
            The intellectual sanctuary crafted for your UPSC journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {features.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 p-6 rounded-xl 
              hover:shadow-premium hover:-translate-y-0.5
              transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-primary text-3xl mb-3">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-headline text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default WhyUs;