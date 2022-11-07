import React from 'react'
import Brand1 from './Group 799 (1).png'
import Brand2 from './Group 800.png'
import Brand3 from './Group 801.png'
import Brand4 from './Group 801 (1).png'
import Brand5 from './Group 802.png'
import Brand6 from './Group 802 (1).png'
import Brand7 from './Group 803.png'
import Brand8 from './Group 804.png'
import Brand9 from './Group 805.png'
import Brand10 from './Group 806.png'
import Brand11 from './Group 806 (1).png'
import Brand12 from './Group 807.png'
import Brand13 from './Group 808.png'
import Brand14 from './Group 809.png'
import Brand15 from './Group 810.png'
import Image from 'next/image'


interface Props { }

const Brand = (props: Props) => {
    let brend_arr = [
        {
            id: 1,
            BrandImg: Brand1,
            title: 'Philips Avent'
        },
        {
            id: 2,
            BrandImg: Brand2,
            title: 'Hipp'
        },
        {
            id: 3,
            BrandImg: Brand3,
            title: 'Omron'
        },
        {
            id: 4,
            BrandImg: Brand4,
            title: 'NUK'
        },
        {
            id: 5,
            BrandImg: Brand5,
            title: 'Nutrilon'
        },
        {
            id: 6,
            BrandImg: Brand6,
            title: 'Britax Romer'
        },
        {
            id: 7,
            BrandImg: Brand7,
            title: 'Omron'
        },
        {
            id: 8,
            BrandImg: Brand8,
            title: 'Nutrilon'
        },
        {
            id: 9,
            BrandImg: Brand9,
            title: 'Puky'
        },
        {
            id: 10,
            BrandImg: Brand10,
            title: 'The name of Brand'
        },
        {
            id: 11,
            BrandImg: Brand11,
            title: 'Ergobaby'
        },
        {
            id: 12,
            BrandImg: Brand12,
            title: 'Alvi'
        },
        {
            id: 13,
            BrandImg: Brand15,
            title: 'Baby Born'
        },
        {
            id: 14,
            BrandImg: Brand14,
            title: 'Chicco'
        },
        {
            id: 15,
            BrandImg: Brand13,
            title: 'Ergobaby'
        },
        {
            id: 16,
            BrandImg: Brand15,
            title: 'Baby Born'
        }
    ]

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
            {
                brend_arr.map(item => (
                    <div style={{ width: '210px', height: '141px', display: 'flex', flexDirection: 'column', gap: '10px' }} key={item.id}>
                        <Image src={item.BrandImg} alt='alt' />
                        <span style={{ color: '#090F24', fontSize: '16px', fontWeight: '600' }}>{item.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Brand
