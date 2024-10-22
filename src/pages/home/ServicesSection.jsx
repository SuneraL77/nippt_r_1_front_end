import React from "react";
import Book from "../../assets/book.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex  flex-col bg-[#F4F2EE] md:flex-row-reverse px-4 md:py-0 py-4  xl:px-44 2xl:px-96 items-center justify-center">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex-[1]"
      >
        <img src={Book} alt="book" className="w-[500px] object-cover" />
      </motion.div>
      <div className="flex-[1] flex flex-col gap-4 md:items-start items-center text-center md:text-start">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="Poppins text-[40px] text-[#177BA5] font-semibold md:leading-none leading-10">
            Discover the world with us
          </span>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="Poppins text-[14px] font-normal">
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us, Would you explore nature paradise in
            the world, let’s find the best destination in world with us.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => navigate("/services")}
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

export default ServicesSection;
