import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../constants/images";

const testimonials = [
  {
    name: "Alice Johnson",
    position: "Community Leader",
    review:
      "Being part of this initiative has not only allowed me to give back but also helped me grow personally. The community we've built is truly inspiring.",
    img: images.gallery1,
  },
  {
    name: "Michael Brown",
    position: "Regular Donor",
    review:
      "I believe in the mission of this organization. Supporting their cause is a small price to pay for the impact they create in people's lives.",
    img: images.gallery2,
  },
  {
    name: "Linda Carter",
    position: "Beneficiary",
    review:
      "Thanks to this program, I have been able to secure a better future for my family. Their support has been a lifeline for us.",
    img: images.gallery2,
  },
  {
    name: "David Smith",
    position: "Volunteer",
    review:
      "It's rewarding to see the direct impact of our efforts. This community is making a real difference, and I'm proud to be a part of it.",
    img: images.gallery2,
  },
  {
    name: "Sophia Martinez",
    position: "Program Coordinator",
    review:
      "Every day I witness the positive changes in people's lives. The gratitude we receive from those we help keeps us motivated.",
    img: images.gallery2,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePaginationClick = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  // Determine which testimonials to display
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section
      className="overflow-hidden relative bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${images.slider4})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-50 mt-8 flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold playfair pt-8 text-center md:text-left">
          What People Say About Us
        </h2>
      </div>

      <div className="p-4 md:p-12 lg:p-24 relative z-10">
        <div className="flex flex-col md:flex-row transition-transform duration-700 ease-in-out">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg shadow-lg p-6 flex flex-col justify-start items-start space-y-4 h-[400px]">
                <img
                  src={testimonial.img}
                  alt={`${testimonial.name}'s testimonial`}
                  className="w-[85px] h-[85px] object-cover rounded-full mb-4 border-2 border-gray-300"
                />
                <h3 className="text-2xl font-bold text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-accent text-sm font-light mb-2">
                  {testimonial.position}
                </p>
                <p className="text-bgColor text-lg italic leading-7 flex-grow">
                  "{testimonial.review}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pb-10 lg:justify-start lg:translate-x-1/4 ">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
