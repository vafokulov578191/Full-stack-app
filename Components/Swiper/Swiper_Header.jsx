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
import { Customer_Reviews, Customer_Reviews2, My_blog } from '../Customer_Reviews';


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



export const Swiper_Header2 = ({ otziv }) => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={otziv === true ? 4 : 6}
            navigation
            onSwiper={(swiper) => swiper}
            onSlideChange={() => console.log('slide change')}
            style={{ paddingLeft: otziv === true ? '40px' : '0px' }}
        >
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews2 />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img2.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews2 />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img3.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img4.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews2 />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img4.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews2 />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img2.src} alt='alt' />
                    )
                }
            </SwiperSlide>
            <SwiperSlide>
                {
                    otziv === true ? (
                        <Customer_Reviews2 />
                    ) : (
                        <Image width={256} height={185} src={Header_2_img3.src} alt='alt' />
                    )
                }
            </SwiperSlide>
        </Swiper>
    )
}


export const Swiper_Footer = () => {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => swiper}
            onSlideChange={() => console.log('slide change')}
            style={{ width: '100%', padding: '0px 37px', }}
        >
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
            <SwiperSlide>
                <My_blog />
            </SwiperSlide>
        </Swiper>
    )
}