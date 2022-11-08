import { Box, Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'
import header_bgsm from '../Components/Images/Bērnu-Veikals-Banner-small-1 1.png'
import header_bgsm2 from '../Components/Images/Bērnu-Veikals-Banner-small-2 2.png'
import { Swiper_Footer, Swiper_Header, Swiper_Header2 } from '../Components/Swiper/Swiper_Header'
import SVGIcons from '../Components/SVGIcons'
import { Swiper_Component, Swiper_Component2, Swiper_Component3, Swiper_Component4 } from '../Components/Swiper/Swiper_Component'
import Arrimage from '../Components/Images/Mask group (1).png'
import Arrimage2 from '../Components/Images/Mask group (2).png'
import Arrimage3 from '../Components/Images/Mask group (3).png'
import Arrimage4 from '../Components/Images/Mask group (4).png'
import Arrimage5 from '../Components/Images/Mask group (5).png'
import Arrimage6 from '../Components/Images/Mask group (6).png'
import Skidka_image from '../Components/Images/Rectangle 9.png'
import Skidka_image2 from '../Components/Images/Mask group (7).png'
import information_img from '../Components/Images/image.png'
import information_img2 from '../Components/Images/Rectangle 145.png'
import Brand from '../Components/Brands/Brand'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import Baby_img from '../Components/Images/Mask group (8).png'
import Checkbox from '@mui/material/Checkbox';
import Products_img from '../Components/Images/1.png'
import Products_img2 from '../Components/Images/2.png'
import Products_img3 from '../Components/Images/3.png'


export default function Home() {

  let arr = [
    {
      id: 1,
      Image: Arrimage,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 2,
      Image: Arrimage2,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 3,
      Image: Arrimage3,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 4,
      Image: Arrimage4,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 5,
      Image: Arrimage5,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 6,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 7,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: true,
      top: false,
      New: false
    },
    {
      id: 8,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 9,
      Image: Arrimage,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 10,
      Image: Arrimage4,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 11,
      Image: Arrimage5,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 12,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 13,
      Image: Arrimage,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: true,
      New: false
    },
    {
      id: 14,
      Image: Arrimage4,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 15,
      Image: Arrimage5,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 16,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 17,
      Image: Arrimage6,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 18,
      Image: Arrimage,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 19,
      Image: Arrimage3,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
    {
      id: 20,
      Image: Arrimage3,
      title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
      discount: false,
      top: false,
      New: true
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box width={'100%'} height={'100%'}>
          <Box width={'100%'} height={'100%'}>
            <Box display={'flex'} gap={'25px'} width={'100%'} height={'510px'} padding={'24px 36px'}>
              <Box display={'flex'} width={'70%'}>
                <Swiper_Header />
              </Box>
              <div style={{ width: '29%', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', overflow: 'hidden' }}>
                <Image style={{ objectFit: 'cover' }} width={525} height={220} src={header_bgsm.src} alt='alt' />
                <Image style={{ objectFit: 'cover' }} width={525} height={220} src={header_bgsm2.src} alt='alt' />
              </div>
            </Box>
            <Box display={'flex'} alignItems={'center'} width={'100%'} height={'300px'} bgcolor={'#F4F5F9'}>
              <Box display={'flex'} width={'1670px'} margin={'0px auto'}>
                <Swiper_Header2 otziv={false} />
              </Box>
            </Box>
          </Box>

          <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'}>
            <Box width={'100%'} height={'180px'} display={'flex'} alignItems={'center'} bgcolor={'white'}>
              <Box width={'1690px'} height={'50px'} margin={'0px auto'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '600', color: '#090F24', fontSize: '18px' }}>
                  <SVGIcons icon='Diamond' />
                  <span>Гарантия качества</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '600', color: '#090F24', fontSize: '18px' }}>
                  <SVGIcons icon='Acortiment' />
                  <span>Огромный ассортимент</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '600', color: '#090F24', fontSize: '18px' }}>
                  <SVGIcons icon='Gruzavik' />
                  <span>Быстрая доставка</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '600', color: '#090F24', fontSize: '18px' }}>
                  <SVGIcons icon='Discount' />
                  <span>Выгодные цены и бонусы</span>
                </div>
              </Box>
            </Box>

            <Box width={'100%'} height={'580px'} display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={'#F4F5F9'}>
              <Box width={'1850px'} height={'445px'} display={'flex'} flexDirection={'column'} gap={'36px'}>
                <Box display={'flex'} flexDirection={'column'} margin={'0px auto'} textAlign={'center'}>
                  <span style={{ color: '#090F24', fontWeight: '700', fontSize: '28px' }}>Широкий ассортимент товаров</span>
                  <span style={{ color: '#ED9BC1', fontSize: '20px', fontFamily: 'cursive' }}>для малышей и мам</span>
                </Box>
                <Box width={'100%'} padding={'0px 36px'} display={'flex'} flexWrap={'wrap'} gap={'24px'} alignItems={'center'}>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Kolyaska_icon' />
                    <span>Коляски</span>
                  </div>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Icon1' />
                    <span>Автокресла</span>
                  </div>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Icon2' />
                    <span>Детская комната</span>
                  </div>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Icon3' />
                    <span>Транспорт и спорт</span>
                  </div>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Icon4' />
                    <span>Игрушки и игры</span>
                  </div>
                  <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                    <SVGIcons icon='Icon5' />
                    <span>Одежда и обувь</span>
                  </div>

                  <Box display={'flex'} gap={'24px'} marginTop={'20px'}>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon6' />
                      <span>Для мамочек	</span>
                    </div>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon7' />
                      <span>Гигиена и уход</span>
                    </div>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon8' />
                      <span>Кормление	</span>
                    </div>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon9' />
                      <span>Детксие подарки</span>
                    </div>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon10' />
                      <span>Елки и игрушки</span>
                    </div>
                    <div className='big_assortiments' style={{ width: '275px', height: '122px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontWeight: '600', cursor: 'pointer' }}>
                      <SVGIcons icon='Icon11' />
                      <span>Подарочные карты</span>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box width={'100%'} height={'650px'} display={'flex'} flexDirection={'column'} padding={'0px 15px'} textAlign={'center'} gap={'30px'}>
              <span style={{ marginTop: '70px', fontWeight: 700, fontSize: '28px' }}>Вы уже смотрели</span>
              <Box width={'100%'} display={'flex'}>
                <Swiper_Component arr={arr} />
              </Box>
            </Box>

            <Box width={'100%'} fontFamily={'Noto Sans'} height={'775px'} display={'flex'} flexDirection={'column'} bgcolor={'#F4F5F9'} textAlign={'center'} gap={'31px'}>
              <span style={{ color: '#090F24', fontSize: '28px', fontWeight: '600', marginTop: '64px' }}>Акции и скидки</span>
              <Box width={'100%'} display={'flex'}>
                <Swiper_Component2 arr={arr} />
              </Box>
            </Box>

            <Box width={'100%'} height={'280px'} display={'flex'} position={'relative'}>
              <Box width={'70%'} height={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'15px'} zIndex={10}>
                <div style={{ position: 'absolute', zIndex: '2', left: '0px' }}>
                  <Image src={Skidka_image} width={1344} height={280} alt='alt' />
                </div>
                <div style={{ position: 'absolute', zIndex: 10, left: '20px', top: '-45px' }}>
                  <SVGIcons icon='Skidka_ikon' />
                </div>
                <div style={{ position: 'absolute', zIndex: 10, right: '76px', top: '-28px' }}>
                  <SVGIcons icon='Sharik_like' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 10, fontFamily: 'Noto Sans', marginRight: '325px' }}>
                  <span style={{ color: '#090F24', fontWeight: 700, fontSize: '30px' }}>Получайте информацию о скидках первыми</span>
                  <span style={{ color: '#393F7B', }}>Оформите подписку и вы будете вкурсе всех наших выгодных акций и скидок</span>
                </div>
                <div style={{ zIndex: 10, display: 'flex', gap: '10px' }}>
                  <input style={{ width: '760px', borderRadius: '35px', outline: 'none', paddingLeft: '25px', border: '1px solid #50909C' }} type="text" placeholder='Ваша электронная почта' />
                  <Button sx={{ width: '230px', height: '45px', backgroundColor: '#74CCD8', borderRadius: '25px', color: 'white', textTransform: 'inherit' }}>Оформить подписку</Button>
                </div>
              </Box>

              <Box width={'30%'} height={'100%'} position={'relative'} zIndex={1} >
                <div style={{ position: 'absolute', right: '0px' }}>
                  <Image src={Skidka_image2} height={278} alt='alt' />
                </div>
                <div style={{ position: 'absolute', zIndex: 10, right: '0px', bottom: '-115px' }}>
                  <SVGIcons icon='skidka_red' />
                </div>
              </Box>
            </Box>

            <Box width={'100%'} height={'775px'} display={'flex'} flexDirection={'column'} textAlign={'center'} gap={'31px'} fontFamily={'Noto Sans'}>
              <span style={{ color: '#090F24', fontSize: '28px', fontWeight: '600', marginTop: '64px' }}>Популярные товары</span>
              <Swiper_Component3 arr={arr} />
            </Box>

            <Box width={'100%'} height={'775px'} bgcolor={'#F4F5F9'} display={'flex'} flexDirection={'column'} textAlign={'center'} gap={'31px'} fontFamily={'Noto Sans'}>
              <span style={{ color: '#090F24', fontSize: '28px', fontWeight: '600', marginTop: '64px' }}>Популярные товары</span>
              <Swiper_Component4 arr={arr} />
            </Box>

            <Box width={'100%'} height={'445px'} display={'flex'}>
              <Box width={'70%'} height={'100%'} fontFamily={'Noto Sans'} paddingLeft={'115px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'20px'}>
                <Box display={'flex'} alignItems={'center'} gap={'15px'}>
                  <span style={{ color: '#090F24', fontWeight: '600', fontSize: '26px' }}>О нас</span>
                  <SVGIcons icon='Apple' />
                </Box>
                <Box width={'830px'}>
                  <span style={{ color: '#686877', lineHeight: '26px' }}><span style={{ color: '#74CCD8', fontWeight: '600' }}>Bērnu veikals</span> — это огромный интернет-магазин для малышей и их родителей. Для нас главный приоритет — это комфорт и безопасность для Вас и Ваших драгоценных крошек ♥. Наш интернет-магазин всегда под рукой и Вы в любое время суток можете заказывать товары, которые мы наиболее быстрым и удобным для Вас способом доставим по всей территории Балтии. Bērnu Veikals обеспечивает большим выбором товаров наилучшего качества по доступным ценам, мы заботимся не только о качестве, но и о вашем кошельке 👛, ведь мы…</span>
                </Box>
                <Button sx={{ width: '200px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'start', gap: '10px', textTransform: 'inherit' }}>
                  <span style={{ color: '#74CCD8' }}>Читать подробнее</span>
                  <div style={{ width: '30px', display: 'flex', alignItems: 'center' }}>
                    <SVGIcons icon='Arrow' />
                  </div>
                </Button>
              </Box>
              <Box width={'30%'} height={'100%'} position={'relative'}>
                <Box display={'flex'} flexDirection={'column'} textAlign={'center'} position={'absolute'} zIndex={10} right={'140px'} top={'50px'} gap={'10px'}>
                  <Image src={information_img} alt='babyshop' />
                  <span style={{ color: '#FFFFFF', fontSize: '20px', fontFamily: 'cursive' }}>Забота о малышах и мамах</span>
                </Box>
                <Box position={'absolute'} top={'-1px'} right={'0px'} zIndex={2}>
                  <Image src={information_img2} alt='babyshop' />
                </Box>
              </Box>
            </Box>

            <Box width={'100%'} height={'585px'} display={'flex'} flexDirection={'column'} bgcolor={'#F4F5F9'} gap={'30px'} textAlign={'center'}>
              <span style={{ color: '#090F24', marginTop: '60px', fontSize: '28px', fontWeight: '600' }}>Бренды</span>
              <Box width={'100%'} display={'flex'} flexWrap={'wrap'}>
                <Brand />
              </Box>
              <Button sx={{ margin: '0px auto', width: '230px', height: '50px', borderRadius: '50px', marginTop: '10px', bgcolor: 'white', textTransform: 'inherit', color: 'black', fontWeight: '600' }}>
                Смотреть все бренды
                <ArrowRightSharpIcon />
              </Button>
            </Box>

            <Box width={'100%'} height={'611px'} display={'flex'} position={'relative'} overflow={'hidden'} fontFamily={'Noto Sans'}>
              <Box width={'40%'} height={'100%'} position={'relative'} zIndex={10}>
                <div style={{ position: 'relative', top: '-2px' }}>
                  <Image src={Baby_img} alt='alt' />
                </div>
                <div style={{ position: 'absolute', bottom: '-94px', left: '175px' }}>
                  <SVGIcons icon='Phone_svg' />
                </div>
                <div style={{ position: 'absolute', bottom: '-32px', left: '236px' }}>
                  <SVGIcons icon='SmartPhone' />
                </div>
              </Box>

              <Box width={'60%'} height={'100%'} bgcolor={'#D6F4FA'} position={'relative'} zIndex={9}>
                <Box width={'680px'} height={'490px'} display={'flex'} flexDirection={'column'} textAlign={'center'} position={'absolute'} top={'50%'} left={'50%'} sx={{ transform: 'translate(-50%, -50%)' }}>
                  <Box display={'flex'} flexDirection={'column'} gap={'5px'} marginBottom={'15px'}>
                    <Box display={'flex'} margin={'0px auto'} alignItems={'center'} gap={'20px'}>
                      <SVGIcons icon='Apple' />
                      <span style={{ color: '#090F24', fontWeight: '600', fontSize: '28px' }}>Свяжитесь с нами</span>
                    </Box>
                    <span style={{ color: '#1B5F6B', fontSize: '16px' }}>Отправьте нам сообщение и мы ответим в ближайшее время</span>
                  </Box>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input className='input_inf' type="text" placeholder='Ваше имя*' />
                    <input className='input_inf' type="text" placeholder='Телефон' />
                    <input className='input_inf' type="text" placeholder='Электронная почта*' />
                    <textarea style={{ width: '678px', height: '130px', borderRadius: '20px', border: '1px solid #74CCD8', outline: 'none', padding: '25px 0px 0px 20px', resize: 'none' }} placeholder='Текст сообщения*'></textarea>
                    <div>
                      <span style={{ color: '#427781', fontSize: '13px' }}>*обязательные поля</span>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox />
                        <span>Я согласен(-на) с <strong>правилами</strong> о обработке моих персональных данных</span>
                      </div>
                      <Button type='submit' sx={{ width: '250px', height: '46px', bgcolor: '#74CCD8', borderRadius: '30px', color: 'white', textTransform: 'inherit' }}>Отправить сообщение</Button>
                    </div>
                  </form>
                  <div style={{ position: 'absolute', right: '-236px', bottom: '25px' }}>
                    <SVGIcons icon='Puzir' />
                  </div>
                </Box>
              </Box>
            </Box>

            <Box width={'100%'} height={'536px'} display={'flex'} flexDirection={'column'} bgcolor={'#F4F5F9'} textAlign={'center'} fontFamily={'Noto Sans'} gap={'35px'}>
              <Box display={'flex'} flexDirection={'column'} gap={'15px'} marginTop={'60px'} color={'#686877'} fontSize={'16px'}>
                <span style={{ color: '#090F24', fontWeight: '600', fontSize: '28px' }}>Отзывы покупателей</span>
                <span>Средняя оценка на Google: <span style={{ color: '#FBBC05', fontSize: '21px' }}>4,9</span> из 5</span>
              </Box>
              <Box>
                <Swiper_Header2 otziv={true} />
              </Box>
              <Button sx={{ width: '280px', height: '48px', borderRadius: '50px', bgcolor: 'white', color: 'black', margin: '0px auto' }}>Смотреть все отзывы Google</Button>
            </Box>

            <Box width={'100%'} height={'925px'} display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} gap={'30px'}>
              <div style={{ marginTop: '60px' }}>
                <Image src={Products_img} alt='alt' />
              </div>
              <div style={{ marginBottom: '80px' }}>
                <Image src={Products_img2} alt='alt' />
              </div>
              <div style={{ marginBottom: '80px' }}>
                <Image src={Products_img3} alt='alt' />
              </div>
            </Box>

            <Box width={'100%'} height={'536px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgcolor={'#D6F4FA'} gap={'36px'}>
              <span style={{ color: '#090F24', fontWeight: '700', fontSize: '30px' }}>Наш блог</span>
              <Swiper_Footer />
              <Button sx={{ bgcolor: '#ED9BB9', width: '161px', height: '48px', borderRadius: '55px', display: 'flex', alignItems: 'center', textTransform: 'inherit', color: 'white' }}>Читать блог <ArrowRightSharpIcon /></Button>
            </Box>

          </Box>
        </Box>
      </Layout>
    </div>
  )
}
