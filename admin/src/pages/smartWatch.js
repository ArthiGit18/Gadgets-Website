import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

export const SmartWatch = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        emiDescription: '',
        visitStore: '',
        price: '',
        offerPrice: '',
        advantages: '',
        operatingSystem: '',
        memoryStorageCapacity: '',
        specialFeatures: '',
        connectivityTechnology: '',
        extraOffers: '',
        wirelessCommunicationStandard: '',
        overallDescription: '',
        closureType: '',
        waterResistanceLevel: '',
        language: '',
        materialType: '',
        supportedApplication: '',
        productDescription: '',
        sportType: '',
        wirelessCapability: '',
        networkTech: '',
        RAMmemoryInstalled: '',
        boxContents: '',
        targetAudience: '',
        manufacturer: '',
        ageRange: '',
        modelName: '',
        modelNumber: '',
        brandName: '',
        warrentySupport: '',
        aboutBrand: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Recursively append nested fields to FormData
        const appendData = (prefix, obj) => {
            for (const [key, value] of Object.entries(obj)) {
                const fieldName = prefix ? `${prefix}.${key}` : key;
                if (typeof value === 'object' && value !== null) {
                    appendData(fieldName, value); // Recursively handle nested objects
                } else if (Array.isArray(value)) {
                    value.forEach((item, index) => {
                        appendData(`${fieldName}[${index}]`, item); // Handle array values
                    });
                } else {
                    data.append(fieldName, value);
                }
            }
        };


        // Append all data to FormData
        appendData('', formData);

        // If there's an image, append it
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await axios.post('http://localhost:3001/api/smartwatches', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log('Smartwatch created:', response.data);
            alert("Smartwatch created successfully!");
        } catch (error) {
            console.error('Error creating smartwatch:', error);
            alert("Error creating smartwatch.");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5">Create Smartwatch</Typography>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required />
            <TextField label="Product Description" name="productDescription" value={formData.productDescription} onChange={handleChange} required />
            <TextField label="Emi Description" name="emiDescription" value={formData.emiDescription} onChange={handleChange} required />
            <TextField label="Visit Store" name="visitStore" value={formData.visitStore} onChange={handleChange} required />
            <TextField label="Price" name="price" value={formData.price} onChange={handleChange} required />
            <TextField label="Offer Price" name="offerPrice" value={formData.offerPrice} onChange={handleChange} />
            <TextField label="Offers Available" name="extraOffers" value={formData.extraOffers} onChange={handleChange} />

            <Typography variant="h6">Overall Details</Typography>
            <TextField label="Operating System" name="operatingSystem" value={formData.operatingSystem} onChange={handleChange} required />
            <TextField label="Memory Storage Capacity" name="memoryStorageCapacity" value={formData.memoryStorageCapacity} onChange={handleChange} required />
            <TextField label="Special Features (comma-separated)" name="specialFeatures" value={formData.specialFeatures} onChange={handleChange} />
            <TextField label="Connectivity Technology" name="connectivityTechnology" value={formData.connectivityTechnology} onChange={handleChange} />
            <TextField label="Wireless Communication Standard" name="wirelessCommunicationStandard" value={formData.wirelessCommunicationStandard} onChange={handleChange} />
            <TextField label="Overall Description" name="overallDescription" value={formData.overallDescription} onChange={handleChange} />
            <TextField label="Advantages" name="advantages" value={formData.advantages} onChange={handleChange} />

            <Typography variant="h6">Additional Details</Typography>
            <TextField label="Closure Type" name="closureType" value={formData.closureType} onChange={handleChange} />
            <TextField label="Water Resistance Level" name="waterResistanceLevel" value={formData.waterResistanceLevel} onChange={handleChange} />
            <TextField label="Language" name="language" value={formData.language} onChange={handleChange} />
            <TextField label="Sport Type" name="sportType" value={formData.sportType} onChange={handleChange} />
            <TextField label="Material Type" name="materialType" value={formData.materialType} onChange={handleChange} />
            <TextField label="Supported Application" name="supportedApplication" value={formData.supportedApplication} onChange={handleChange} />

            <Typography variant="h6">Connectivity</Typography>
            <TextField label="Wireless Capability" name="wirelessCapability" value={formData.wirelessCapability} onChange={handleChange} />
            <TextField label="Network Technology" name="networkTech" value={formData.networkTech} onChange={handleChange} />

            <Typography variant="h6">Memory Storage</Typography>
            <TextField label="RAM Memory Installed" name="RAMmemoryInstalled" value={formData.RAMmemoryInstalled} onChange={handleChange} />

            <Typography variant="h6">Item Details</Typography>
            <TextField label="Box Contents" name="boxContents" value={formData.boxContents} onChange={handleChange} />
            <TextField label="Target Audience" name="targetAudience" value={formData.targetAudience} onChange={handleChange} />
            <TextField label="Manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
            <TextField label="Age Range" name="ageRange" value={formData.ageRange} onChange={handleChange} />
            <TextField label="Model Name" name="modelName" value={formData.modelName} onChange={handleChange} />
            <TextField label="Model Number" name="modelNumber" value={formData.modelNumber} onChange={handleChange} />
            <TextField label="Brand Name" name="brandName" value={formData.brandName} onChange={handleChange} />

            <Typography variant="h6">About Brand</Typography>
            <TextField label="About Brand" name="aboutBrand" value={formData.aboutBrand} onChange={handleChange} />
            <TextField label="Warrenty & Support" name="warrentySupport" value={formData.warrentySupport} onChange={handleChange} />

            <Typography variant="h6">Upload Image</Typography>
            <input
                type="file"
                name="imageUrl"
                onChange={handleImageChange}
                accept="image/*"
            />

            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </Box>
    );
};
