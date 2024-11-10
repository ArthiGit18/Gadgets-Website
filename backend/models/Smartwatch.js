// models/Smartwatch.js
const mongoose = require('mongoose');

const SmartwatchSchema = new mongoose.Schema({
    name: { type: String, required: true },//name
    description: { type: String, required: true },//description
    price: { type: Number, required: true },//price
    offerPrice: { type: Number },//offer
    emiDescription: { type: String },//emi
    visitStore: { type: String },//store name
    operatingSystem: { type: String },//os
    memoryStorageCapacity: { type: String },

    advantages: [{ type: String }],
    extraOffers: [{ type: String }],
    specialFeatures: [{ type: String }],// special points
    supportedApplication: [{ type: String }],
    aboutBrand: [{ type: String }],//about points

    connectivityTechnology: { type: String },
    wirelessCommunicationStandard: { type: String },
    overallDescription: { type: String },
    closureType: { type: String },
    waterResistanceLevel: { type: String },
    language: { type: String },
    materialType: { type: String },
    productDescription: { type: String },
    sportType: { type: String },
    wirelessCapability: { type: String },
    networkTech: { type: String },
    RAMmemoryInstalled: { type: String },
    boxContents: { type: String },
    targetAudience: { type: String },
    manufacturer: { type: String },
    ageRange: { type: String },
    modelName: { type: String },
    modelNumber: { type: String },
    brandName: { type: String },
    warrentySupport: { type: String },
    imageUrl: { type: String }
});

module.exports = mongoose.model('Smartwatch', SmartwatchSchema);
