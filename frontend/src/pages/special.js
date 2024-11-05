import { Button } from '@mui/material'
import React from 'react'

const Special = () => {
    return (
        <div className='special_wrapper'>
            <div className='container'>
                <h2>Our Specials</h2>
                <div className='special_main'>
                    <div className='special_section1'>
                        <img src="/assets/special/1.jpg" alt="earbuds" />
                        <p>Experience unparalleled wireless freedom with AirPods – your perfect companion for immersive sound, seamless connectivity, and all-day comfort.</p>
                        <Button variant='contained'>More Information</Button>
                    </div>
                    <div className='special_section2'>
                        <img src="/assets/special/2.jpg" alt="earbuds" />
                    </div>
                    <div className='special_section3'>
                        <img src="/assets/special/Shop.png" alt="earbuds" />
                        <img src="/assets/special/1.jpg" alt="earbuds" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Special