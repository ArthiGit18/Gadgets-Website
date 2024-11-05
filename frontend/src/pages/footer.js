import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='container'>
                <div className='footer_main'>
                    <div className='contact_us'>
                        <h3>Contact Us</h3>
                        <div className='footer_contact'>
                            <PlaceIcon />
                            <p>London</p>
                        </div>
                        <div className='footer_contact'>
                            <PhoneIcon />
                            <p>+910 67835673</p>
                        </div>
                        <div className='footer_contact'>
                            <EmailIcon />
                            <p>arthiar18@gmail.com</p>
                        </div>
                    </div>
                    <div className='quick_links'>
                        <h3>Quick Links</h3>
                        <div className='links_footer'>
                            <p><a href="/">Home</a></p>
                            <p><a href="/">About</a></p>
                            <p><a href="/">Contact</a></p>
                            <p><a href="/">Blog</a></p>
                        </div>
                    </div>
                    <div className='social_links'>
                        <h3>Social Links</h3>
                        <div className='social_footer'>
                            <InstagramIcon />
                            <XIcon />
                            <FacebookOutlinedIcon />
                        </div>
                        <h3>Customer Service</h3>
                        <div className='links_footer'>
                            <p><a href="/">Terms of Use</a></p>
                            <p><a href="/">FQA</a></p>
                            <p><a href="/">Report Issues</a></p>
                        </div>
                    </div>
                    <div className='subscribe'>
                        <h3>Subscribe to our News Letter</h3>
                        <div className='links_footer'>
                            <p>
                                Sign up to be the first to receive latest news about our products.
                            </p>
                            <Button variant="contained">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_copyright'>
                <p>@2024 GadgetBazar. Shop With Us</p>
            </div>
        </div>
    )
}

export default Footer