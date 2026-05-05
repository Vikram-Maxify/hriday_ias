import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "KULVEER KUMAR",
    time: "A month ago",
    img: "https://i.ibb.co/pvDFx6S2/Kulveer.png",
    text: "I have had great experience at HRIDAY IAS. HRIDAY IAS IS REALLY 🫀(HEART) OF EVERY UPSC ASPIRANTS .The curriculum for the Gs foundation courses is exceptionally well-structured, especially the way they break down the 1 year, 2 year and 3 year programs into clear, manageable phases. It makes the vast UPSC syllabus feel much more approachable for a beginner The faculty is highly experienced. Having mentors like Ankur Nain Sir and Ruksana ma'am makes a huge difference, as they bring both technical clarity and years of teaching expertise to the classroom. The environment is professional and the study materials, including the specialized answer-writing modules, are top-notch.If you are looking for a coaching institute that balances a strong academic foundation with a clear strategy for every stage of the examination, I highly recommend checking them out."
  },
  {
    name: "Deepika Sharma",
    time: "A month ago",
    img: "https://i.ibb.co/jmhChHD/deepika.png",
    text: "I have been at Hriday IAS for a few months now.What I appreciate most is the discipline.The classes start on time,the schedule is predictable and the tests are actually challenging.The teachers are very cooperative,you can actually talk to them after class without feeling like you're bothering them.It's a great mix of expert guidance and a motivating atmosphere.For any confused about where to start their UPSC journey,I'd say come have a demo class here,the quality speaks for itself."
  },
  {
    name: "Sweta Sharma",
    time: "A month ago",
    img: "https://i.ibb.co/FLvWX3MY/Shweta.png",
    text: "I am started my prep bit late so I was worried about catching up . The one year program here is intense but very systematic. What I like most is the discipline, classes start on time and the tests happen every week without fail. It keeps you on your toes . Hriday IAS is definitely for those who are ready to put in the hard work ."
  },
  {
    name: "Navneet Kumar",
    time: "A month ago",
    img: "https://i.ibb.co/fG8gTYYv/navneet.png",
    text: "The study environment is professional and quiet , exactly what you need to stay in the zone. The notes are crisp and actually updated with current affairs which saves me a lot of time.It's a serious place for serious UPSC aspirants. Glad I chose HRIDAY IAS over the bigger brand names."
  },
  {
    name: "6745_Pushpender",
    time: "A month ago",
    img: "https://i.ibb.co/pBs2TT6g/pushpendar.png",
    text: "What I appreciate most about Hriday IAS is the accessibility of the mentors and teachers. Having the visionary leadership of Ruksana ma'am makes a world of difference.You aren't just another roll number here, there is a genuine focus on individual progress and conceptual clarity."
  },
  {
    name: "Salma Khatak",
    time: "A month ago",
    img: "https://i.ibb.co/s9Q7K3wX/salma.png",
    text: "Great experience so far at Hriday IAS. The faculty is super approachable and tha syllabus coverage is very systematic. Unlike other UPSC coachings, you don't feel lost in a crowd of hundreds here. The focus is clearly on quality and deep learning rather than just finishing the books. Highly recommend it to any serious aspirant."
  },
  {
    name: "NITESH TIWARI",
    time: "2 months ago",
    img: "https://i.ibb.co/TxB3FsGc/image.png",
    text: "You will get everything, required for upsc preparation.best faculty,best environment. Unique and interesting teaching style of teachers.one on one mentorship."
  },
  {
    name: "Pranav Prabhakar",
    time: "17 hours ago",
    img: "https://i.ibb.co/NnQqTGPd/Pranav.png",
    text: "Great coaching institute for IAS preparation. The faculty is knowledgeable and explains concepts in a clear and practical way. Study material is well-structured and updated as per the latest exam pattern. Regular tests and feedback help in tracking progress. Overall, a supportive environment for serious aspirants aiming for success."
  },
  {
    name: "Sudhir",
    time: "a week ago",
    img: "https://i.ibb.co/nM5Qgrpy/sudheer.png",
    text: "Maine Hriday IAS se mentorship li, experience kaafi achha raha. Mentors supportive hain aur guidance clear milti hai—UPSC prep ke liye helpful 👍"
  },
  {
    name: "Eklavya Institute Of Education",
    time: "4 Month ago",
    img: "https://i.ibb.co/fGBfz1VT/Eklavya.png",
    text: "The behaviour of the staff and the teachers is very nice. The Director of the institute is very humble, polite and cooperative. Doubts and issues of the students are resolved very quickly and are taken seriously."
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