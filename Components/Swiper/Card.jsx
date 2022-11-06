import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import SVGIcons from '../SVGIcons'
import Raduis from './Raduis'
import HalfRating from './HalfRating'


export const Card = ({ Img, title }) => {
    return (
        <>
            <Box width={'295px'} height={'100%'} borderRadius={'8px'} p={'10px'} display={'flex'} flexDirection={'column'} bgcolor={'#ffffff'} fontFamily={'Noto Sans'} border={'1px solid #E4E7EE'} >
                <Box sx={{ width: '267px', height: '267px', display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                    <Image src={Img} alt='alt' />
                    <div style={{ cursor: 'pointer', position: 'absolute', top: '6px', left: '6px' }}>
                        <SVGIcons icon='Swiper_discount' />
                    </div>
                    <div style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '10px' }}>
                        <SVGIcons icon='Like' />
                    </div>
                </Box>
                <Box display={'flex'} flexDirection={'column'} textAlign={'start'} gap={'10px'} padding={'0px 10px'} marginBottom={'20px'}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#090F24', fontWeight: '600' }}>100 €</span>
                        <span style={{ color: '#B7B8C5' }}>250 €</span>
                    </div>
                    <span style={{ fontSize: '17px' }}>{title}</span>
                </Box>
            </Box>
        </>
    )
}


export const All_card = ({ Img, title }) => {
    return (
        <Box width={'295px'} height={'100%'} borderRadius={'8px'} p={'10px'} display={'flex'} flexDirection={'column'} bgcolor={'#ffffff'} fontFamily={'Noto Sans'} border={'1px solid #E4E7EE'}>
            <Box sx={{ width: '267px', height: '267px', display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                <Image src={Img} alt='alt' />
                <div style={{ cursor: 'pointer', position: 'absolute', top: '6px', left: '6px' }}>
                    <SVGIcons icon='Swiper_discount' />
                </div>
                <div style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '10px' }}>
                    <SVGIcons icon='Like' />
                </div>
            </Box>
            <Box display={'flex'} flexDirection={'column'} textAlign={'start'} gap={'10px'} padding={'0px 10px'} marginBottom={'20px'}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#090F24', fontWeight: '600' }}>100 €</span>
                    <span style={{ color: '#B7B8C5' }}>250 €</span>
                </div>
                <span style={{ fontSize: '17px' }}>{title}</span>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={'17px'}>
                <Box padding={'0px 10px'}>
                    <Raduis />
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={'15px'} padding={'0px 10px'}>
                    <SVGIcons icon='Dostavka' />
                    <span style={{ color: '#686877', fontSize: '15px' }}>Доставка: 1-2 дня</span>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={'10px'} padding={'0px 10px'} marginBottom={'10px'}>
                    <HalfRating />
                    <span style={{ color: '#B7B8C5' }}>15 отзывов</span>
                </Box>
            </Box>
        </Box>
    )
}