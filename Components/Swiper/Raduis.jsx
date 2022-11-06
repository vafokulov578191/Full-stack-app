import React from 'react'

const Raduis = () => {
    return (
        <div style={{ display: 'flex', gap: '9px' }}>
            <div className='radius' style={{ backgroundColor: '#F39999' }}></div>
            <div className='radius' style={{ backgroundColor: '#090F24' }}></div>
            <div className='radius' style={{ backgroundColor: '#90D0B1' }}></div>
            <div className='radius' style={{ backgroundColor: '#9C7C75' }}></div>
            <div className='radius' style={{ backgroundColor: '#A2D0DA' }}></div>
            <div className='radius' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #B7B8C5', cursor: 'pointer', color: '#B7B8C5' }}>+</div>
        </div>
    )
}

export default Raduis