import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const CustomBreadcrumbs = ({ heading, breadcrumbItems }) => {
    return (
        <div className='header_container'>
            <div className='header_wrapper'>
                <div className='headerV1'>
                    <h2>{heading}</h2> 
                </div>
                <div role="presentation" onClick={handleClick} className='breadcrumb-container'>
                    <Breadcrumbs aria-label="breadcrumb">
                        {breadcrumbItems.map((item, index) => (
                            item.href ? (
                                <RouterLink style={{color:"red"}} key={index} to={item.href}>
                                    {item.label}
                                </RouterLink>
                            ) : (
                                <Typography style={{color: "white"}} key={index}>{item.label}</Typography>
                            )
                        ))}
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    );
};

export default CustomBreadcrumbs;
