import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const NewCollection = () => {
    const [productDetails, setProductDetails] = useState([]);

    // Fetch smartwatch details from API
    useEffect(() => {
        axios.get('http://localhost:3001/api/smartwatches')  // Use the new smartwatches API
            .then(response => setProductDetails(response.data))
            .catch(error => console.error("Error fetching smartwatches: ", error));
    }, []);

    return (
        <div className='product_common container'>
            {/* Product Listing */}
            {productDetails.map(product => (
                <div key={product._id} className='product_detail'>
                    <div className='product_img'>
                        <img src={`http://localhost:3001${product.imageUrl}`} alt={product.name} />
                    </div>
                    <div className='product_ref'>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className='product_actions'>
                            <Button variant='text'>View</Button>
                            <div>
                                <FavoriteIcon />
                                <Button variant='text'>BUY NOW</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewCollection;
