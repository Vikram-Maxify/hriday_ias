import React, { useEffect, useRef } from "react";

const facultyData = [
  { name: "Dr. A. Sharma", subject: "History", exp: "10+ Years", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "Ms. P. Verma", subject: "Polity", exp: "12+ Years", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { name: "Mr. R. Kumar", subject: "Geography", exp: "8+ Years", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
  { name: "Dr. K. Singh", subject: "Ethics", exp: "15+ Years", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
  { name: "Mr. S. Mehta", subject: "Economics", exp: "9+ Years", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "Dr. N. Rao", subject: "Science", exp: "11+ Years", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
];

const FacultyCard = ({ item }) => (
  <div className="w-[85vw] md:w-[260px] shrink-0 snap-center bg-surface border border-accent/20 rounded-xl overflow-hidden shadow-soft hover:shadow-premium transition duration-300">
    <img src={item.img} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h3 className="font-headline font-bold text-primary">{item.name}</h3>
      <p className="text-accent text-sm">{item.subject}</p>
      <p className="text-xs text-on-surface-variant">{item.exp}</p>
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