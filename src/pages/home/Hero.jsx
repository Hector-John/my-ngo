import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import images from "../../constants/images";
import { Link } from "react-scroll";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      className="relative h-screen bg-cover bg-center opacity-0"
      style={{ backgroundImage: `url(${images.bgimg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex items-center justify-center h-full relative z-10 padded">
        <motion.div
          className="text-center w-[90%] lg:w-[55%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          {/* First Paragraph */}
          <motion.p
            className="text-white mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Together, we can make a lasting impact in the world.
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="h1 capitalize font-medium text-white mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Together we can make the difference
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="subtitle text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            You have not lived today until you have done something for someone
            who can never repay you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-[60%] md:w-[60%] m-auto justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              className="py-3 px-6 bg-[#ffffff26] text-white rounded shadow border hover:bg-primary hover:border-primary transition duration-200 h-full"
              onClick={() => navigate("/donate")}
            >
              Donate Now
            </motion.button>

            <Link to="about" smooth={true} duration={800}>
              <motion.button className="py-3 px-6 bg-white text-textColor rounded shadow border-white hover:bg-red-600 hover:text-white hover:border-red-600 transition duration-200 h-full">
                Know About Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hidden md:grid lg:grid text-center py-10 px-8 grid-cols-3 gap-4 w-[85%] left-[7.5%] md:top-[85%] lg:top-[85%] bg-white rounded z-50 shadow-lg absolute"
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center text-center  ">
          <CountUp
            start={0}
            end={1237}
            duration={2}
            redraw={true}
            className="text-[2.5rem] font-bold mb-4 text-textColor "
          />
          <p className="text-primary font-medium text-xl">Donations</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center border-l border-r border-gray-300">
          <CountUp
            start={0}
            end={1750}
            duration={2}
            redraw={true}
            className="text-[2.5rem] font-bold mb-4 text-textColor "
          />
          <p className="text-primary font-medium text-xl">Volunteers</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <CountUp
            start={0}
            end={160}
            duration={2}
            redraw={true}
            className="text-[2.5rem] font-bold mb-4 text-textColor "
          />
          <p className="text-primary font-medium text-xl">Missions</p>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
