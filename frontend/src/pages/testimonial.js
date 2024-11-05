import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Testimonial = () => {
    const banners = [
        { name: 'Arieal Jafhann', description:"Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!", imageUrl: './assets/testimonial/1.jpeg' },
        { name: 'Jaspher Jahnnac', description:"Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!", imageUrl: './assets/testimonial/2.jpeg' },
        { name: 'Reashanna Facohn', description:"Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!", imageUrl: './assets/testimonial/3.jpeg' },
        { name: 'Saiffah Riyasha', description:"Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!", imageUrl: './assets/testimonial/4.jpeg' },
    ];

    const [activeBanner, setActiveBanner] = useState(0);

    // Automatically change banner every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [banners.length]);

    // Get indices for the left and right banners
    const prevBanner = (activeBanner - 1 + banners.length) % banners.length;
    const nextBanner = (activeBanner + 1) % banners.length;

    return (
        <div className='testimonial_wrapper'>
            <h2>Our Customer Says</h2>
            <section className='container'>
                <div className='testimonial_main'>
                    <Button
                        variant='contained'
                        onClick={() => setActiveBanner(prevBanner)}
                    >
                        Previous
                    </Button>
                    <div className='slides'>
                        <div className='slide slide-left'>
                            <img src={banners[prevBanner].imageUrl} alt="author" />
                            <h2>{banners[prevBanner].name}</h2>
                            <p>{banners[prevBanner].description}</p>
                        </div>
                        <div className='slide slide-center'>
                            <img src={banners[activeBanner].imageUrl} alt="author" />
                            <h2>{banners[activeBanner].name}</h2>
                            <p>{banners[prevBanner].description}</p>
                        </div>
                        <div className='slide slide-right'>
                            <img src={banners[nextBanner].imageUrl} alt="author" />
                            <h2>{banners[nextBanner].name}</h2>
                            <p>{banners[prevBanner].description}</p>
                        </div>
                    </div>
                    <Button
                        variant='contained'
                        onClick={() => setActiveBanner(nextBanner)}
                    >
                        Next
                    </Button>
                </div>
                <div className='dots'>
                    {banners.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeBanner ? 'active' : ''}`}
                            onClick={() => setActiveBanner(index)}
                        ></span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
