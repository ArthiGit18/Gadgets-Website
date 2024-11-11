import React from 'react'
import { NavbarCommon } from '../common/navbarCommon'
import CustomBreadcrumbs from '../common/breadcrumbs'
import Footer from './footer';

export const Contact = () => {
    return (
        <div className='contact_main'>
            <div className='Product_Header'>
                <NavbarCommon />
                <div className='container breadcums'>
                    <CustomBreadcrumbs
                        heading="Contact"
                        breadcrumbItems={[
                            { label: "home", href: "/" },
                            { label: "contact" }
                        ]}
                    />
                </div>
            </div>
            <div className='contact_wrapper'>
                <img src="/assets/contact/1 (3).jpg" alt="contact Here" />

                <div className='container contact_boxes'>
                    <div className='contact_email'>
                        <img src="/assets/contact/2 (2).png" alt="contact Here" />
                        <p>Email : <a href="mailto:arthianbalagan180@gmail.com">arthianbalagan180@gmail.com</a></p>
                    </div>
                    <div className='contact_email'>
                        <img src="/assets/contact/2 (2).png" alt="contact Here" />
                        <p>Phone : <a href="tel:+916379424101">+91 6379424101</a></p>
                    </div>
                    <div className='contact_email'>
                        <img src="/assets/contact/2 (2).png" alt="contact Here" />
                        <p>Phone : <a href="tel:+916379424101">+91 6379424101</a></p>
                    </div>
                </div>

                <div className='container contact_issues_wrapper'>
                    <h2>Hello, What can we help you with ?</h2>
                    <div className='contact_issues'>
                        <div className='issue_box'>
                            <h4>Your Orders</h4>
                            <p>Track packeges </p>
                            <p>Edit or cancel orders</p>
                        </div>
                        <div className='issue_box'>
                            <h4>Returns and Refunds</h4>
                            <p>Return or exchange items</p>
                            <p>Print return mailing labels</p>
                        </div>
                        <div className='issue_box'>
                            <h4>Manage Addresses</h4>
                            <p>Update your addresses</p>
                            <p>Add address, landmark details</p>
                        </div>
                        <div className='issue_box'>
                            <h4>manage Prime</h4>
                            <p>View your benefits</p>
                            <p>Membership details</p>
                        </div>
                        <div className='issue_box'>
                            <h4>Payment Settings</h4>
                            <p>Add or edit payment methods</p>
                            <p>Change expired debit or credit card</p>
                        </div>
                        <div className='issue_box'>
                            <h4>Account Settings</h4>
                            <p>Change your email or password</p>
                            <p>Update login information</p>
                        </div>
                        <div className='issue_box'>
                            <h4>Digital Services and Device Support</h4>
                            <p>Find device help and support</p>
                            <p>Troubleshoot device issues</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
