import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "KULVEER KUMAR",
    time: "A month ago",
    img: "https://i.ibb.co/pvDFx6S2/Kulveer.png",
    text: "I have had great experience at HRIDAY IAS. HRIDAY IAS IS REALLY 🫀 (HEART) OF EVERY UPSC ASPIRANT. The curriculum is exceptionally well-structured with clear phases for 1, 2, and 3 year programs. Faculty like Ankur Nain Sir and Ruksana Ma'am bring deep clarity and experience. Study materials and answer writing modules are top-notch. Highly recommended for serious aspirants."
  },
  {
    name: "Deepika Sharma",
    time: "A month ago",
    img: "https://i.ibb.co/jmhChHD/deepika.png",
    text: "I have been at Hriday IAS for a few months now. The discipline is excellent — classes start on time, schedule is predictable, and tests are challenging. Teachers are very cooperative and approachable. It's a great mix of expert guidance and motivation."
  },
  {
    name: "Sweta Sharma",
    time: "A month ago",
    img: "https://i.ibb.co/FLvWX3MY/Shweta.png",
    text: "I started my prep a bit late so I was worried, but the one year program is very systematic. Weekly tests and strict discipline keep you on track. Hriday IAS is for those ready to work hard."
  },
  {
    name: "Navneet Kumar",
    time: "A month ago",
    img: "https://i.ibb.co/fG8gTYYv/navneet.png",
    text: "The study environment is quiet and professional. Notes are crisp and updated with current affairs. It's a serious place for serious UPSC aspirants."
  },
  {
    name: "6745_Pushpender",
    time: "A month ago",
    img: "https://i.ibb.co/pBs2TT6g/pushpendar.png",
    text: "What I appreciate most is mentor accessibility. You're not just a roll number here. There's real focus on individual progress and clarity."
  },
  {
    name: "Salma Khatak",
    time: "A month ago",
    img: "https://i.ibb.co/s9Q7K3wX/salma.png",
    text: "Great experience so far. Faculty is approachable and syllabus coverage is systematic. Unlike other coachings, you don't feel lost in a crowd."
  },
  {
    name: "NITESH TIWARI",
    time: "2 months ago",
    img: "https://i.ibb.co/TxB3FsGc/image.png",
    text: "You will get everything required for UPSC preparation — best faculty, best environment, unique teaching style and one-on-one mentorship."
  },
  {
    name: "Pranav Prabhakar",
    time: "17 hours ago",
    img: "https://i.ibb.co/NnQqTGPd/Pranav.png",
    text: "Great coaching institute. Faculty explains concepts clearly. Study material is well-structured and updated. Regular tests help track progress."
  },
  {
    name: "Sudhir",
    time: "a week ago",
    img: "https://i.ibb.co/nM5Qgrpy/sudheer.png",
    text: "Maine Hriday IAS se mentorship li — experience kaafi achha raha. Mentors supportive hain aur guidance clear milti hai 👍"
  },
  {
    name: "Eklavya Institute Of Education",
    time: "1 Month ago",
    img: "https://i.ibb.co/fGBfz1VT/Eklavya.png",
    text: "Staff and teachers are very polite and cooperative. Doubts are resolved quickly and seriously."
  }
];

const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const LIMIT = 120;
  const isLong = item.text.length > LIMIT;

  const displayText = expanded
    ? item.text
    : item.text.slice(0, LIMIT) + (isLong ? "..." : "");

  return (
    <div id="testimonials" className="w-[90vw] md:w-[320px] shrink-0 snap-center bg-surface border border-accent/20 rounded-xl p-5 shadow-soft">
      <div className="flex items-center gap-3 mb-3">
        <img src={item.img} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-primary text-sm">{item.name}</h4>
          <p className="text-xs text-accent">{item.time}</p>
        </div>
      </div>

      <div className="flex text-accent mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-xs" />
        ))}
      </div>

      <p className="text-on-surface-variant text-sm italic">
        "{displayText}"
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary mt-2 font-medium underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

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

        <div className="text-center mb-10">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface">
            Success Stories of Our Students
          </h2>
          <p className="text-on-surface-variant">
            Hear from those who achieved their dreams with us.
          </p>
        </div>

        <div className="relative overflow-hidden">

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