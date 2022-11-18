import { Box, Button, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../Layout/Layout'

interface Props { }

const Test = () => {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState(null)
    const [radio, setRadio] = useState('')


    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (img !== null) {
            let obj = {
                id: Math.random(),
                title: title,
                img: img,
                discount: true,
                radio: radio
            }
            console.log(obj);
        }
    }
    
    return (
        <Layout>
            <Box width={'100%'} height={'50vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <form onSubmit={handleSubmit} style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField onChange={(e) => setTitle(e.target.value)} sx={{ width: '350px' }} id="outlined-basic" label="title" variant="outlined" />
                    <input onChange={(e) => setImg(e.target.files[0])} style={{ width: '350px' }} type='file' />
                    <FormLabel id="demo-radio-buttons-group-label">Тип товара</FormLabel>
                    <RadioGroup
                        onChange={(e) => setRadio(e.target.value)}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="discount" control={<Radio />} label="Female" />
                        <FormControlLabel value="top" control={<Radio />} label="Male" />
                        <FormControlLabel value="New" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <Button type='submit' sx={{ bgcolor: 'green', color: 'white' }}>send</Button>
                </form>
            </Box>
        </Layout>
    )
}

export default Test