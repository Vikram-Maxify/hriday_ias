import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "scholarship", "faculty", "testimonials", "whyus", "location"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "scholarship", label: "Scholarship" },
    { id: "faculty", label: "Faculty" },
    { id: "testimonials", label: "Testimonials" },
    { id: "location", label: "Location" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 
        bg-background/95 backdrop-blur-xl border-b border-accent/20 ${
          isScrolled ? "shadow-soft" : ""
        }`}
      >
        <div className="max-w-[93rem] mx-auto w-full px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-headline font-extrabold tracking-tight text-primary cursor-pointer hover:scale-105 transition-transform">
            Hriday IAS
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative font-body font-medium uppercase tracking-widest text-[11px] px-3 py-2 rounded transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-primary bg-surface-variant"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-variant"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <button className="text-primary font-body uppercase tracking-widest text-[11px] px-4 py-1.5 rounded-full border border-primary hover:bg-surface-variant transition-all">
              Check Eligibility
            </button>

            <button className="bg-primary text-white font-body uppercase tracking-widest text-[11px] px-5 py-2 rounded-full hover:scale-105 transition-all shadow-button">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-lg"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-surface shadow-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primary text-lg"
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface font-medium py-2 border-b border-surface-variant hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}

          <button className="mt-6 text-primary border border-primary rounded-full py-2">
            Check Eligibility
          </button>

          <button className="bg-primary text-white rounded-full py-2">
            Register Now
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;