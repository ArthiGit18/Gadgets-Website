import React from 'react';
import CustomBreadcrumbs from '../../common/breadcrumbs';
import { NavbarCommon } from '../../common/navbarCommon';
import NewCollection from './newCollection';
import Footer from '../footer';



const Product = () => {

    return (
        <div className='Product_collection'>
            <div className='Product_Header'>
                <NavbarCommon />
                <div className='container breadcums'>
                    <CustomBreadcrumbs
                        heading="Product"
                        breadcrumbItems={[
                            { label: "home", href: "/" },
                            { label: "product" }
                        ]}
                    />
                </div>
            </div>
            <div className='Product_wrapper'>
               
                <NewCollection />
            </div>
            <Footer />
        </div>
    );
};

export default Product;
