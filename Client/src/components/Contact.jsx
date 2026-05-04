import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {

  const callNumber = () => {
    window.location.href = "tel:+919667096213";
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/919667096213", "_blank");
  };

  return (
    <section
      id="location"
      className="py-16 px-4 bg-background border-t border-accent/20"
    >
      <motion.div
        className="max-w-[93rem] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-3">
            Visit Us or Contact Now
          </h2>
          <p className="text-on-surface-variant">
            Speak with our experts and start your UPSC journey today.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}
          <div className="bg-surface border border-accent/20 p-6 rounded-xl shadow-premium space-y-6">

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-full text-primary">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-1">
                  Center Address
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  A-78, Block-A, Sector 2, 
                  Noida ,<br />Metro Station Noida Sector 15, Exit Gate No. 3
                  (201301)
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-full text-primary">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-1">
                  Contact Numbers
                </h3>

                <div className="mt-1 space-y-1">
                  <a
                    href="tel:+919667096213"
                    className="block text-primary hover:underline text-lg font-medium"
                  >
                    +91 9667096213
                  </a>
                  <a
                    href="tel:+919355650923"
                    className="block text-primary hover:underline text-lg font-medium"
                  >
                    +91 9355650923
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-accent/20 flex gap-3">

              <button
                onClick={callNumber}
                className="flex-1 bg-primary text-white font-bold py-3 rounded-full hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 shadow-button"
              >
                <FaPhoneAlt /> Call Now
              </button>

              <button
                onClick={openWhatsapp}
                className="flex-1 border border-primary text-primary font-bold py-3 rounded-full hover:bg-surface-variant transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </button>

            </div>

          </div>

          {/* RIGHT MAP */}
          <div className="h-[350px] rounded-xl overflow-hidden border border-accent/20 shadow-soft">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4707.814888858986!2d77.30716768931956!3d28.585069013011115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ac9d6c1a19%3A0xa1cb942dd7c350e0!2sHriday%20IAS!5e1!3m2!1sen!2sin!4v1776834523638!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Contact;