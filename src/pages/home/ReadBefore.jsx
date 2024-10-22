import React from "react";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ReadBefore = () => {
  const navigate = useNavigate();

  return (
    <div className="py-14 px-4 xl:px-44 2xl:px-96">
      {/* title */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center"
      >
        <span className="Poppins md:leading-none leading-10 text-center text-[40px] font-semibold">
          Read Before You Travel
        </span>
      </motion.div>

      {/* items */}
      <div className="flex flex-col items-center justify-center mt-16 md:gap-0 gap-10">
        {/* item 1 */}
        <div className="flex md:flex-row flex-col items-center gap-10">
          {/* img */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <img
              src={Img1}
              alt="img1"
              className="md:w-[350px] w-screen h-[250px] object-cover rounded-2xl"
            />
          </motion.div>
          {/* details */}
          <div className="md:w-[350px] flex flex-col gap-3">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="Poppins text-[25px] font-semibold">
                Personalized Travel Itineraries
              </span>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="Poppins text-[15px] font-normal">
                Get customized travel plans tailored to your preferences,
                ensuring an unforgettable adventure without the hassle.
              </p>
            </motion.div>

            {/* button */}

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 w-fit cursor-pointer hover:opacity-70 transition-opacity duration-150"
            >
              <FaCircleArrowRight className="text-lg" />
              <span className="Poppins font-semibold text-[14px]">
                Read More
              </span>
            </motion.div>
          </div>
        </div>

        {/* item 2 */}

        <div className="flex md:flex-row-reverse flex-col items-center gap-10">
          {/* img */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <img
              src={Img2}
              alt="img1"
              className="md:w-[350px] w-screen h-[250px] object-cover rounded-2xl"
            />
          </motion.div>
          {/* details */}
          <div className="w-[350px] flex flex-col gap-3">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="Poppins text-[25px] font-semibold">
                24/7 Travel Assistance
              </span>
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="Poppins text-[15px] font-normal">
                Enjoy round-the-clock support for any travel needs, ensuring a
                smooth, worry-free experience on your trip.
              </p>
            </motion.div>

            {/* button */}

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 w-fit cursor-pointer hover:opacity-70 transition-opacity duration-150"
            >
              <FaCircleArrowRight className="text-lg" />
              <span className="Poppins font-semibold text-[14px]">
                Read More
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBefore;
