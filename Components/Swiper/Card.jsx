import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import SVGIcons from '../SVGIcons'
import Raduis from './Raduis'
import HalfRating from './HalfRating'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { likedProduct } from '../../store/features/likedSlice'
import { Button } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const Card = ({ Img, title, isLike = false, item }) => {

    const [like, setLike] = useState(isLike);
    const dispatch = useDispatch();
    const state = useSelector(state => state.liked.liked)
    const handleLike = () => {
        dispatch(likedProduct(item));
        setLike(!like);
    };

    return (
        <>
            <Box width={'295px'} height={'100%'} borderRadius={'8px'} p={'10px'} display={'flex'} flexDirection={'column'} bgcolor={'#ffffff'} fontFamily={'Noto Sans'} border={'1px solid #E4E7EE'} >
                <Box sx={{ width: '267px', height: '267px', display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                    <Image src={Img} alt='alt' />
                    <div style={{ cursor: 'pointer', position: 'absolute', top: '6px', left: '6px' }}>
                        <SVGIcons icon='Swiper_discount' />
                    </div>
                    <div style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '10px' }} onClick={handleLike}>
                        <SVGIcons icon='Like' checked={like} />
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


export const All_card = ({ Img, title, discount, top, New, item, isLike = false, lev = false }) => {
    const [like, setLike] = useState(isLike);
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(likedProduct(item));
        setLike(!like);
    };

    return (
        <Box width={'295px'} height={'100%'} borderRadius={'8px'} p={'10px'} display={'flex'} flexDirection={'column'} bgcolor={'#ffffff'} fontFamily={'Noto Sans'} border={'1px solid #E4E7EE'}>
            <Box sx={{ width: '267px', height: '267px', display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                <Image src={Img} alt='alt' />
                <div style={{ cursor: 'pointer', position: 'absolute', top: '6px', left: '6px' }}>
                    {
                        discount === true ? <SVGIcons icon='Swiper_discount' /> : ''
                    }
                    {
                        top === true ? <SVGIcons icon='HIT' /> : ''
                    }
                    {
                        New === true ? <SVGIcons icon='New' /> : ''
                    }
                </div>
                <div style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '10px' }} onClick={handleLike}>
                    <SVGIcons icon='Like' checked={like} />
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


export const Card_Liked = ({ Img, title, discount, top, New, item, isLike = false }) => {
    const [like, setLike] = useState(isLike);
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(likedProduct(item));
        setLike(!like);
    };

    return (
        <Box width={'295px'} height={'100%'} borderRadius={'8px'} p={'10px'} display={'flex'} flexDirection={'column'} bgcolor={'#ffffff'} fontFamily={'Noto Sans'} border={'1px solid #E4E7EE'}>
            <Box sx={{ width: '267px', height: '267px', display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
                <Image src={Img} alt='alt' />
                <div style={{ cursor: 'pointer', position: 'absolute', top: '6px', left: '6px' }}>
                    {
                        discount === true ? <SVGIcons icon='Swiper_discount' /> : ''
                    }
                    {
                        top === true ? <SVGIcons icon='HIT' /> : ''
                    }
                    {
                        New === true ? <SVGIcons icon='New' /> : ''
                    }
                </div>
                <div style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '10px' }} onClick={handleLike}>
                    <SVGIcons icon='delete' checked={like} />
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
                <Button sx={{ width: '250px', height: '46px', bgcolor: '#69CB87', borderRadius: '25px', display: 'flex', alignItems: 'center', margin: '0px auto', marginBottom: '25px', gap: '10px', color: 'white' }}><LocalGroceryStoreIcon /> Купить</Button>
            </Box>
        </Box>
    )
}