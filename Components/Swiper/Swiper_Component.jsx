import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Card, All_card } from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export const Swiper_Component = ({ arr }) => {

    return (
        <Box width={'100%'} >
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                onSwiper={(swiper) => swiper}
                onSlideChange={() => console.log('slide change')}
                style={{ paddingRight: '50px', paddingLeft: '16px' }}
            >
                {
                    arr.map((item, id) => (
                        <SwiperSlide key={id}>
                            <Card Img={item.Image} item={item} title={item.title} top={item.top} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}


export const Swiper_Component2 = ({ arr }) => {
    return (
        <Box width={'100%'} >
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                onSwiper={(swiper) => swiper}
                onSlideChange={() => console.log('slide change')}
                style={{ paddingRight: '50px', paddingLeft: '16px' }}
            >
                {
                    arr.map((item, id) => (
                        <SwiperSlide key={id}>
                            <All_card Img={item.Image} item={item} title={item.title} top={item.top} discount={item.discount} New={item.New} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

