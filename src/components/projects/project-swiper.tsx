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
    name: ReactNode | string,
    description: ReactNode | string,
    url: string,
    repo: string,
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
        className="relative z-20 flex w-full overflow-y-hidden overflow-y-scroll no-scrollbar snap-x snap-mandatory"
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
                <a href={item.url} target="_blank" rel="noreferrer">
                  <div className="z-20 flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen pt-20 space-y-5 snap-center sm:justify-center md:pt-20 ">
                    <Image
                      src={item.snapshot}
                      priority={true}
                      alt=""
                      className="transition-all ease-in-out w-[300px] hover:scale-95 hover:drop-shadow-2xl "
                      width={300}
                      height={300}
                      quality={100}
                    />
                    <div className="max-w-3xl px-4 space-y-10 text-center md:px-10">
                      {item.name}
                      {item.description}
                      {item.techtag}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

  );
};

export default ProjectSwiper;
