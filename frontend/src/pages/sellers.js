import { Button } from '@mui/material'
import React from 'react'

const Sellers = () => {
    return (
        <div className='sellers_wrapper'>
            <div className='container'>
                <div className='sellers_header'>
                    <h2>Best Sellers</h2>
                    <p>Discover our curated collection of best sellers – handpicked favorites loved by our customers for their exceptional quality, performance, and value.</p>
                </div>
                <div className='sellers_content'>
                    <div className='seller_one'>
                        <img src="/assets/sellers/1 (2).jpg" alt="Ear Buds" />
                        <div className='seller_brand'>
                            <p>Smart Watch</p>
                            <p>$ 300</p>
                        </div>
                    </div>
                    <div className='seller_one'>
                        <img src="/assets/sellers/1 (3).jpg" alt="Ear Buds" />
                        <div className='seller_brand'>
                            <p>Head Phone</p>
                            <p>$ 300</p>
                        </div>
                    </div>
                    <div className='seller_one'>
                        <img src="/assets/sellers/1 (1).jpg" alt="Ear Buds" />
                        <div className='seller_brand'>
                            <p>Digital Camera</p>
                            <p>$ 300</p>
                        </div>
                    </div>
                </div>
                <div className='sellers_header'>
                    <Button variant='contained'>Shop Now</Button>
                </div>
            </div>

        </div>
    )
}

export default Sellers