import { Button } from '@mui/material'
import React from 'react'

const Explore = () => {
  return (
    <div className='explore_wrapper'>
        <div className='container'>
            <div className='explore_main'>
                <div className='explore_content'>
                    <h2>Get your next must-have Gadget</h2>
                    <p>Collect the innovation you love. 
                    Explore our curated selection of high-tech wonders, designed to elevate your daily life and inspire your passions.</p>
                    <Button variant='contained'>Buy Now</Button>
                </div>
                <div className='explore_img'>
                    {/* <img src="assets/Headphone.png" alt="HeadPhone" /> */}
                    <img src="assets/grudge/4.png" alt="HeadPhone" />
                    <img src="assets/2.png" alt="HeadPhone" />
                </div>
            </div>
            <div className='explore_main'>
                <div className='explore_img2'>
                    <img src="assets/grudge/4.png" alt="HeadPhone" />
                    <img src="assets/headphone/1 (2).png" alt="HeadPhone" />
                </div>
                <div className='explore_content'>
                    <h2>Get your next must-have Gadget</h2>
                    <p>Collect the innovation you love. 
                    Explore our curated selection of high-tech wonders, designed to elevate your daily life and inspire your passions.</p>
                    <Button variant='contained'>Buy Now</Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Explore