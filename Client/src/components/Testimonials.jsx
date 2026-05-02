import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Siddharth N.",
    rank: "AIR 45, UPSC 2023",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Hriday IAS changed my preparation journey."
  },
  {
    name: "Ananya P.",
    rank: "AIR 112, UPSC 2023",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Scholarship made it possible for me."
  },
  {
    name: "Rajat K.",
    rank: "AIR 234, UPSC 2022",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Answer writing focus changed everything."
  },
  {
    name: "Neha S.",
    rank: "AIR 89, UPSC 2023",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "Structured guidance gave me confidence."
  }
];

const Card = ({ item }) => (
  <div className="w-[90vw] md:w-[320px] shrink-0 snap-center bg-surface border border-accent/20 rounded-xl p-5 shadow-soft">
    <div className="flex items-center gap-3 mb-3">
      <img src={item.img} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-primary text-sm">{item.name}</h4>
        <p className="text-xs text-accent">{item.rank}</p>
      </div>
    </div>

    <div className="flex text-accent mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-xs" />
      ))}
    </div>

    <p className="text-on-surface-variant text-sm italic">
      "{item.text}"
    </p>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: window.innerWidth < 768 ? window.innerWidth * 0.9 : 340,
            behavior: "smooth",
          });

          // loop back
          if (
            scrollRef.current.scrollLeft +
              scrollRef.current.clientWidth >=
            scrollRef.current.scrollWidth
          ) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-[93rem] mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface">
            Success Stories of Our Students
          </h2>
          <p className="text-on-surface-variant">
            Hear from those who achieved their dreams with us.
          </p>
        </div>

        {/* Scroll */}
        <div className="relative overflow-hidden">

          {/* Desktop fade */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4"
          >
            {testimonials.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;