'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  data: {
    name: ReactNode,
    description: ReactNode,
    url: ReactNode,
    snapshot: string,
    techtag: ReactNode,
  }[];
};

const ProjectSwiper = ({ data }: Props) => {
  return (
    <motion.div
        initial={{
          y: 200,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="relative z-20 flex w-full overflow-y-scroll no-scrollbar snap-x snap-mandatory"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <div className="z-20 flex flex-col items-center justify-around flex-shrink-0 w-full h-full snap-center">
                {item.name}
                  <Image
                    src={item.snapshot}
                    priority={true}
                    alt=""
                    className="transition-all ease-in-out w-[300px] hover:scale-95 hover:drop-shadow-2xl "
                    width={300}
                    height={300}
                    quality={100}
                  />
                  <div className="max-w-3xl px-6 space-y-10 text-center md:px-10">
                    {item.description}
                    {item.techtag}
                    {item.url}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

  );
};

export default ProjectSwiper;
