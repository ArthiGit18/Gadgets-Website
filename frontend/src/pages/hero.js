import React from 'react'
import { Navbar } from './navbar'
import Tradebar from './tradebar'

const Hero = () => {
    return (
        <div className='hero_wrapper'>

            <div className='container'>
                <Navbar />
                <div className='hero_content'>
                    <div className='hero_note'>
                        <h2>Introducing Our Top Pick of the Week</h2>
                        <p>Behold the TechFit Pro Smartwatch, the ultimate companion for modern living.</p>
                    </div>
                    <div className='hero_img'>
                        <img src="assets/hero/WATCH.png" alt="Image" />
                        <div className='hero_img_grudge'>
                            <img src="assets/grudge/4.png" alt="Image" />
                        </div>
                        <div className='hero_img_content'>
                            <div className='hero_img_point1'>
                                <p>Fitness Tracking</p>
                            </div>
                            <div className='hero_img_point2'>
                                <p>Music Control</p>
                            </div>
                            <div className='hero_img_point3'>
                                <p>Compatibility</p>
                            </div>
                            <div className='hero_img_point4'>
                                <p>GPS Tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tradebar'>
                <Tradebar />
            </div>
        </div>
    )
}

export default Hero