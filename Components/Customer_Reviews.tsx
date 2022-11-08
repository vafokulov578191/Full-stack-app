import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Rating } from '@mui/material';
import Rectang from '../Components/Images/Rectangle 16 (1).png'
import Image from 'next/image';
import SVGIcons from './SVGIcons';

interface Props { }

export const Customer_Reviews = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '380px', height: '230px', borderRadius: '15px', border: '1px solid #E4E7EE', padding: '23px 10px', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '100%', width: '40px', height: '40px', backgroundColor: 'green', color: 'white' }}>A</div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', fontWeight: '600' }}>
                        <span>Аутсоринговая компания IT Develop</span>
                        <span style={{ color: 'gray', fontSize: '13px' }}>1 отзыв 96 фото</span>
                    </div>
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <MoreVertIcon />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                <div style={{ display: 'flex', gap: '5px', fontSize: '14px', color: 'gray', paddingLeft: '10px' }}>
                    <Rating name="size-small" defaultValue={4.5} size="small" />
                    <span>4 года назад</span>
                </div>
                <span style={{ paddingLeft: '10px', margin: '15px 0px' }}>Магазин в котором много чего есть, если надо что-то срочно. Товар хорошего качества, цены низкие.</span>
                <div style={{ display: 'flex', gap: '12px', paddingLeft: '10px', cursor: 'pointer' }}>
                    <ThumbUpOffAltIcon />
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}


export const Customer_Reviews2 = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '380px', height: '230px', borderRadius: '15px', border: '1px solid #E4E7EE', padding: '23px 10px', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '100%', width: '40px', height: '40px', backgroundColor: 'blue', color: 'white' }}>B</div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', fontWeight: '600' }}>
                        <span>Аутсоринговая компания IT Develop</span>
                        <span style={{ color: 'gray', fontSize: '13px' }}>1 отзыв 96 фото</span>
                    </div>
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <MoreVertIcon />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                <div style={{ display: 'flex', gap: '5px', fontSize: '14px', color: 'gray', paddingLeft: '10px' }}>
                    <Rating name="size-small" defaultValue={4.5} size="small" />
                    <span>4 года назад</span>
                </div>
                <span style={{ paddingLeft: '10px', margin: '15px 0px' }}>Магазин в котором много чего есть, если надо что-то срочно. Товар хорошего качества, цены низкие.</span>
                <div style={{ display: 'flex', gap: '12px', paddingLeft: '10px', cursor: 'pointer' }}>
                    <ThumbUpOffAltIcon />
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}


export const My_blog = () => {
    return (
        <Box width={'100%'} height={'256px'} display={'flex'} gap={'28px'} border={'1px solid #74CCD8'} bgcolor={'white'} borderRadius={'15px'} padding={'10px'}>
            <Image src={Rectang} alt='alt' />
            <Box display={'flex'} flexDirection={'column'} gap={'12px'} marginTop={'22px'} marginRight={'22px'}>
                <span style={{ color: 'gray', fontSize: '14px' }}>25.05.2022</span>
                <span style={{ color: '#090F24', fontSize: '18px', fontWeight: '600' }}>Как выбрать коляску ребенку?</span>
                <span style={{ color: 'gray', fontSize: '17px' }}>Модель Mica предлагает простую установку при помощи основания Isofix с упором в пол и...</span>
                <span style={{ color: '#74CCD8', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>Читать подробнее <SVGIcons icon='Arrow' /></span>
            </Box>
        </Box>
    )
}