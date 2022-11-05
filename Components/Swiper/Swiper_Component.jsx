import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/system';

const Swiper_Component = (props) => {
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
                    props.arr.map((item, id) => (
                        <SwiperSlide key={id}>
                            <Card Img={item.Image} title={item.title} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

export default Swiper_Component
