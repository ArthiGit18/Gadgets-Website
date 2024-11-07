import React, {useState, useEffect} from 'react'
import CustomBreadcrumbs from '../../common/breadcrumbs'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavbarCommon } from '../../common/navbarCommon';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/commonData/product.json')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

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
                <div className='product_list'>
                    {products.map(product => (
                        <div key={product.id} className='product_new'>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
                <div className='product_common container'>
                    <div className='product_detail'>

                        <div className='product_img'>
                            <img src="./assets/gadgets/4.jpg" alt="Product" />
                        </div>
                        <div className='product_ref'>
                            <div className=''>
                                <h3>Smart TV</h3>
                                <p>Ullamco sint ullamco deserunt sit do cillum cupidatat Lorem elit nostrud sint. Ad esse nostrud sint tempor reprehenderit. Ea sunt cupidatat ad pariatur.</p>
                            </div>
                            <div className='product_actions'>
                                <Button variant='text'>View</Button>
                                <div>
                                    <FavoriteIcon />
                                    <Button variant='text'>BUY NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product_detail'>

                        <div className='product_img'>
                            <img src="./assets/gadgets/4.jpg" alt="Product" />
                        </div>
                        <div className='product_ref'>
                            <div className=''>
                                <h3>Smart TV</h3>
                                <p>Ullamco sint ullamco deserunt sit do cillum cupidatat Lorem elit nostrud sint. Ad esse nostrud sint tempor reprehenderit. Ea sunt cupidatat ad pariatur.</p>
                            </div>
                            <div className='product_actions'>
                                <Button variant='text'>View</Button>
                                <div>
                                    <FavoriteIcon />
                                    <Button variant='text'>BUY NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product_detail'>

                        <div className='product_img'>
                            <img src="./assets/gadgets/4.jpg" alt="Product" />
                        </div>
                        <div className='product_ref'>
                            <div className=''>
                                <h3>Smart TV</h3>
                                <p>Ullamco sint ullamco deserunt sit do cillum cupidatat Lorem elit nostrud sint. Ad esse nostrud sint tempor reprehenderit. Ea sunt cupidatat ad pariatur.</p>
                            </div>
                            <div className='product_actions'>
                                <Button variant='text'>View</Button>
                                <div>
                                    <FavoriteIcon />
                                    <Button variant='text'>BUY NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product_detail'>

                        <div className='product_img'>
                            <img src="./assets/gadgets/4.jpg" alt="Product" />
                        </div>
                        <div className='product_ref'>
                            <div className=''>
                                <h3>Smart TV</h3>
                                <p>Ullamco sint ullamco deserunt sit do cillum cupidatat Lorem elit nostrud sint. Ad esse nostrud sint tempor reprehenderit. Ea sunt cupidatat ad pariatur.</p>
                            </div>
                            <div className='product_actions'>
                                <Button variant='text'>View</Button>
                                <div>
                                    <FavoriteIcon />
                                    <Button variant='text'>BUY NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
