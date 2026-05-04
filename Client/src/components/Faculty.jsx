import React, { useEffect, useRef } from "react";

const facultyData = [
  { name: "Ruksana Ma'am", subject: "Ethics and Geoghraphy", exp: "4+ Years", img: "https://i.ibb.co/21sWpbNT/1st-image-1.png" },
  { name: "Rishabh Sharma Sir", subject: "Envirement & Ecology, IR, Current Affairs", exp: "6+ Years", img: "https://i.ibb.co/pjkCtCQq/3rd-image.png" },
  { name: "Chand Kubba Sir", subject: "Polity (GS & Optional),Economics, Internal Security", exp: "10+ Years", img: "https://i.ibb.co/1fnJKPY7/5th-image.png" },
  { name: "R.K Jha Sir", subject: "History (GS & Optional)", exp: "20+ Years", img: "https://i.ibb.co/qYtVhtr7/4th-image.png" },
  { name: "Arvind Sir", subject: "CSAT ", exp: "15+ Years", img: "https://i.ibb.co/7N2DFkBT/6th-image.png" },
  { name: "Ashok Singh Sir", subject: "Hindi Literature", exp: "22+ Years", img: "https://i.ibb.co/ccrt2Ksr/2nd-image.png" },
];

const FacultyCard = ({ item }) => (
  <div className="w-[85vw] md:w-[260px] shrink-0 snap-center bg-surface border border-accent/20 rounded-xl overflow-hidden shadow-soft hover:shadow-premium transition duration-300">
    <img src={item.img} className="w-full h-96 object-cover" />
    <div className="p-4">
      <h3 className="font-headline font-bold text-primary">{item.name}</h3>
      <p className="text-black text-sm">{item.subject}</p>
      <p className="text-xs text-on-surface-variant">{item.exp} Experience</p>
    </div>
  </div>
);

const Faculty = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        if (!scrollRef.current) return;

        const scrollAmount =
          window.innerWidth < 768 ? window.innerWidth * 0.85 : 280;

        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // loop
        if (
          scrollRef.current.scrollLeft +
            scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 2500);
    };

    startScroll();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-[93rem] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface">
            Meet Our Expert Faculty
          </h2>
          <p className="text-on-surface-variant">
            Guided by the best minds in UPSC preparation.
          </p>
        </div>

        {/* Scroll */}
        <div className="relative overflow-hidden">

          {/* Desktop fade only */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing py-4"
          >
            {facultyData.map((item, i) => (
              <FacultyCard key={i} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faculty;