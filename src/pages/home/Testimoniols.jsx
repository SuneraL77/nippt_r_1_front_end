import React from "react";
import TestiCard from "../../components/testiCard/TestiCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

const Testimoniols = () => {
  const testData = [
    {
      img: "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg",
      name: "Fatima Taylor",
    },

    {
      img: "https://cdn.pixabay.com/photo/2019/12/04/09/30/man-4672229_960_720.jpg",
      name: "Ethan Roberts",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/02/20/03/man-7428290_1280.jpg",
      name: "Noah Anderson",
    },

    {
      img: "https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_960_720.jpg",
      name: "Lily Thompson",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/03/03/12/52/girl-4898696_1280.jpg",
      name: "Aria Johnson",
    },
  ];

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
        <span className="Poppins text-center md:leading-none leading-10 text-[40px] font-semibold">
          What customers say about us
        </span>
      </motion.div>

      {/* items */}
      <div className="mt-20 testi ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testData.map((item, index) => (
            <SwiperSlide key={index}>
              <TestiCard img={item.img} name={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoniols;
