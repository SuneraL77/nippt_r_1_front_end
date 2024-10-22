import React, { useRef } from "react";
import DestinationCard from "../../components/destinationCard/DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

// Import Swiper styles and modules
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Destinations = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const dest = [
    {
      img: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sigiriya",
    },
    {
      img: "https://images.unsplash.com/photo-1637047327854-d9d101d32bd5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Marble Beach",
    },
    {
      img: "https://images.unsplash.com/photo-1581420455468-e748ad82ff50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kandy",
    },
    {
      img: "https://images.unsplash.com/photo-1578519050142-afb511e518de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ella",
    },
    {
      img: "https://images.unsplash.com/photo-1578517929034-db013fd86597?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nuwara Eliya",
    },
  ];

  return (
    <div className="px-4 py-20 xl:px-44 2xl:px-96">
      <div className="md:h-[300px]  w-full flex md:flex-row flex-col gap-10 justify-center overflow-hidden">
        {/* left */}
        <div className="md:flex-[1] flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="Poppins text-[40px] font-semibold leading-[45px]">
                Destinations You Shouldn't Miss
              </span>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="Poppins text-[14px] font-normal">
                Choose Your Destination and Contact Our Experts for the Best
                Deals!
              </p>
            </motion.div>
          </div>

          {/* carousel controllers */}
          <div className="flex items-center gap-2 justify-end">
            <div
              className="bg-[#292D32]/50 p-[4px] text-white rounded-lg cursor-pointer hover:bg-[#292D32]/60 transition-colors duration-150 flex items-center justify-center text-center"
              ref={prevRef}
            >
              <IoIosArrowBack className="text-xl" />
            </div>
            <div
              className="bg-[#177BA5] p-[4px] text-white rounded-lg cursor-pointer hover:bg-[#177BA5]/90 transition-colors duration-150 flex items-center justify-center text-center"
              ref={nextRef}
            >
              <IoIosArrowForward className="text-xl" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md:flex-[2] overflow-hidden desti">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {dest.map((item, index) => (
              <SwiperSlide key={index}>
                <DestinationCard img={item.img} name={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
