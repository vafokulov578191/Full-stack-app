import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import SVGIcons from '../Components/SVGIcons'
import Link from 'next/link'
import AccountMenu from '../Components/AccountMenu';
import { useSelector } from 'react-redux';

interface Props {}

const Layout = ({ children }) => {
    let user = []
    const state = useSelector((state:any) => state.amount)

    return (
        <div>
            <Box width={'100%'} height={'120px'}>
                <Stack color={'#090F24'} bgcolor={'#ffffff'} width={'100%'} height={'50px'} p={'0px 50px'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
                    <Link href='/'>
                        <SVGIcons icon='logo' />
                    </Link>
                    <Box display={'flex'} gap={'40px'} fontFamily={'Noto Sans'} fontSize={'14px'}>
                        <Link href='#'>О нас</Link>
                        <Link href='#'>Оплата и доставка</Link>
                        <Link href='#'>Отзывы</Link>
                        <Link href='#'>FAQ</Link>
                        <Link href='#'>Блог</Link>
                        <Link href='#'>Контакты</Link>
                    </Box>
                    <Stack width={'500px'} direction={'row'} spacing={'55px'} alignItems={'center'}>
                        <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                            <SVGIcons icon='Phone_icon' />
                            <span>+38 097 435 6743</span>
                        </Box>
                        <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                            <SVGIcons icon='Email' />
                            <span>Kidsshop@gmail.com</span>
                        </Box>
                        <Box display={'flex'} gap={'10px'}>
                            <span style={{ color: 'gray', cursor: 'pointer' }}>РУ</span>
                            <span style={{ cursor: 'pointer', borderBottom: '1px solid #74CCD8' }}>LV</span>
                        </Box>
                    </Stack>
                </Stack>

                <Stack color={'#090F24'} bgcolor={'#E4E7EE'} direction={'row'} width={'100%'} height={'70px'} p={'0px 50px'} alignItems={'center'}>
                    <div className='burger_panel'>
                        <SVGIcons icon='Burger_panel' />
                        <span style={{ fontWeight: '600', fontSize: '16px', textTransform: 'uppercase' }}>Каталог товаров</span>
                    </div>

                    <Box width={'100%'} height={'100%'} padding={'0px 0px 0px 45px'} gap={'62px'} display={'flex'} alignItems={'center'} position={'relative'}>
                        <Box display={'flex'} alignItems={'center'} position={'relative'}>
                            <div style={{ position: 'absolute', left: '17px', top: '14px' }}>
                                <SVGIcons icon='Search_icon' />
                            </div>
                            <input className='serach_input' type="text" placeholder='Введите запрос для поиска' />
                            <Button sx={{ width: '95px', height: '45px', bgcolor: '#74CCD8', borderRadius: '0px 30px 30px 0px', textTransform: 'inherit', color: 'white' }}>Найти</Button>
                        </Box>

                        {
                            user.length !== 0 ? (
                                <Box width={'160px'}>
                                    <AccountMenu />
                                </Box>
                            ) : (
                                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                    <div style={{ cursor: 'pointer' }}>
                                        <SVGIcons icon='Account_menu' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '15px' }}>
                                        <Link href='#' style={{ color: '#B7B8C5' }}>Войти</Link>
                                        <Link href='#' style={{ color: '#090F24', fontWeight: '600' }}>Регистрироватся</Link>
                                    </div>
                                </Box>
                            )
                        }
                        <Box display={'flex'} alignItems={'center'} gap={'42px'} width={'130px'} justifyContent={'flex-end'}>
                            <Link href='Liked'>
                                <div style={{ cursor: 'pointer', position: 'relative' }}>
                                    <SVGIcons icon='Liked' />
                                    <div style={{ width: '19px', height: '19px', position: 'absolute', borderRadius: '100%', background: '#ED9BC1', fontSize: '10.50px', textAlign: 'center', top: '-8px', left: '14px' }}>
                                        <span style={{ color: 'white', position: 'relative', top: '2px' }}>{state}</span>
                                    </div>
                                </div>
                            </Link>
                            <Link href='OrderStep'>
                                <div style={{ cursor: 'pointer', position: 'relative' }}>
                                    <SVGIcons icon='Store' />
                                    <div style={{ width: '19px', height: '19px', position: 'absolute', borderRadius: '100%', background: '#ED9BC1', fontSize: '10.50px', textAlign: 'center', top: '-8px', left: '16px' }}>
                                        <span style={{ color: 'white', position: 'relative', top: '2px' }}>1</span>
                                    </div>
                                </div>
                            </Link>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <div className="main">
                {children}
            </div>
            <Box fontFamily={'Noto Sans'} width={'100%'} height={'340px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} borderTop={'1px solid #74CCD8'}>
                <Box width={'100%'} height={'100%'} display={'flex'}>
                    <Box width={'565px'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box width={'180px'} height={'190px'} display={'flex'} flexDirection={'column'} gap={'23px'}>
                            <span>Контакты</span>
                            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                                <Box display={'flex'} gap={'7px'}>
                                    <SVGIcons icon='Phone_icon' />
                                    <span>+38 097 435 6743</span>
                                </Box>
                                <Box display={'flex'} gap={'14px'}>
                                    <SVGIcons icon='Whatsup_icon' />
                                    <SVGIcons icon='Messenger_icon' />
                                </Box>
                            </Box>
                            <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                <SVGIcons icon='Email' />
                                <span>Kidsshop@gmail.com</span>
                            </Box>
                            <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                <SVGIcons icon='wach' />
                                <span>Пн-Пт: 9:00 - 17:00</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={'800px'} height={'100%'} borderLeft={'1px solid #74CCD8'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box width={'420px'} height={'220px'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <span style={{ fontSize: '19px', fontWeight: 600, color: '#090F24' }}>Меню сайта</span>
                            <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'space-between'}>
                                <Box display={'flex'} flexDirection={'column'} gap={'11px'}>
                                    <span>Каталог</span>
                                    <span>О нас</span>
                                    <span>Оплата и доставка</span>
                                    <span>Возврат и гарантийный ремонт</span>
                                    <span>Защита личных данных</span>
                                    <span>Бренды</span>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={'11px'}>
                                    <span>Правила покупки</span>
                                    <span>Отзывы</span>
                                    <span>FAQ</span>
                                    <span>Блог</span>
                                    <span>Контакты</span>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={'560px'} height={'100%'} borderLeft={'1px solid #74CCD8'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
                        <Box width={'170px'} height={'180px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                            <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                                <span style={{ fontWeight: 600, color: '#090F24', fontSize: '18px' }}>Социальные сети</span>
                                <div style={{ display: 'flex', gap: '20px ' }}>
                                    <SVGIcons icon='Twitter_icon' />
                                    <SVGIcons icon='instagram_icon' />
                                    <SVGIcons icon='faceebok_icon' />
                                    <SVGIcons icon='Youtube_icon' />
                                </div>
                            </Box>
                            <Box>
                                <SVGIcons icon='Footer_bernu' />
                            </Box>
                        </Box>
                        <div style={{ width: '71px', cursor: 'pointer', height: '71px', borderRadius: '100%', position: 'absolute', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #74CCD8', top: '-43px', right: '66px' }}>
                            <SVGIcons icon='Chat' />
                            <span>Chat</span>
                        </div>
                    </Box>
                </Box>
                <Box width={'100%'} height={'48px'} bgcolor={'#74CCD8'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'14px'} color={'white'}>
                    <span>2011-2022 Все права защищены</span>
                </Box>
            </Box>
        </div>
    )
}

export default Layout