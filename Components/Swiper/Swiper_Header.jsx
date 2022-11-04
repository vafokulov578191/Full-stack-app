import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from '../Images/Bērnu-Veikals-Banner-1920-big 4.png'

import Header_2_img from '../Images/Rectangle 26.png'
import Header_2_img2 from '../Images/Rectangle 27.png'
import Header_2_img3 from '../Images/Rectangle 28 (1).png'
import Header_2_img4 from '../Images/Rectangle 29.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';


export const Swiper_Header = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => swiper}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image width={1293} height='462' src={Img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={1293} height='462' src={Img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={1293} height='462' src={Img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={1293} height='462' src={Img.src} alt='alt' />
            </SwiperSlide>
        </Swiper>
    )
}



export const Swiper_Header2 = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            onSwiper={(swiper) => swiper}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image objectFit='cover' width={256} height='185' src={Header_2_img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img2.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img3.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img4.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img4.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image objectFit='cover' width={256} height='185' src={Header_2_img.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img2.src} alt='alt' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={256} height='185' src={Header_2_img3.src} alt='alt' />
            </SwiperSlide>
        </Swiper>
    )
}
