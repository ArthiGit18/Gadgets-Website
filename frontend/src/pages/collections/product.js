import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import CustomBreadcrumbs from '../../common/breadcrumbs';
import { NavbarCommon } from '../../common/navbarCommon';
import NewCollection from './newCollection';

const Product = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
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
                {/* Search Filter */}
                <div className="search_filter container">
                    <Autocomplete
                        freeSolo
                        options={[]} // No options provided, as filter API is removed
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search by Product"
                                variant="outlined"
                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                            />
                        )}
                    />
                </div>

                {/* Display New Collection */}
                <NewCollection />
            </div>
        </>
    );
};

export default Product;
