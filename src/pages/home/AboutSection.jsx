import React from "react";
import AboutImg from "../../assets/aboutg.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-4 md:flex-row flex-col md:gap-0 gap-8  xl:px-44 2xl:px-96  flex items-center justify-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-[1]"
      >
        <img src={AboutImg} alt="AboutImg" className="w-[500px]" />
      </motion.div>
      <div className="flex-[1] flex flex-col gap-8 md:items-start items-center">
        {/* title */}
        <div className="flex flex-col leading-7">
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="Poppins text-[15px] font-medium text-[#177BA5]"
          >
            Little About us
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="Poppins text-[40px] font-semibold md:leading-none leading-10"
          >
            Plan your perfect trip
          </motion.span>
        </div>

        {/* desc */}
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="Poppins text-[14px] font-normal"
          >
            Are you looking for an adventurous travel, or just carrying your
            work alongside you while you travel and explore new places, then
            your perfect trip is one with us, Phnes travels help you search
            flights & places, book your most convenient hotels/places at your
            comfort while we help you discover the world. Welcome to a new
            dispensation.
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="Poppins text-[14px] font-normal"
          >
            Are you looking for an adventurous travel, or just carrying your
            work alongside you while you travel and explore new places, then
            your perfect trip is one with us.
          </motion.p>
        </div>

        {/* button */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={() => navigate("/about")}
          className="bg-[#177BA5] flex w-fit py-[10px] cursor-pointer hover:bg-white border border-solid border-[#177BA5] group px-10 rounded-full transition-colors duration-200"
        >
          <span className="Poppins text-[13px] font-normal text-white group-hover:text-[#177BA5]">
            See More
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
