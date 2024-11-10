const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Smartwatch = require('../models/Smartwatch');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'smartWatch/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Helper function to split string into array and trim each item
function splitAndTrim(value) {
    if (Array.isArray(value)) {
        // If it's already an array, return it as-is (or trim items)
        return value.map(item => item.trim());
    } else if (typeof value === 'string') {
        // If it's a comma-separated string, split it into an array and trim items
        return value.split(',').map(item => item.trim());
    }
    // Return an empty array if value is undefined or not an expected type
    return [];
}

// POST Route for creating a new smartwatch
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            offerPrice,
            emiDescription,
            visitStore,
            advantages = [],
            operatingSystem,
            memoryStorageCapacity,
            specialFeatures = [],
            connectivityTechnology,
            wirelessCommunicationStandard,
            overallDescription,
            closureType,
            waterResistanceLevel,
            language,
            materialType,
            supportedApplication = [],
            extraOffers = [],
            productDescription,
            sportType,
            wirelessCapability,
            networkTech,
            RAMmemoryInstalled,
            boxContents,
            targetAudience,
            manufacturer,
            ageRange,
            modelName,
            modelNumber,
            brandName,
            warrentySupport,
            aboutBrand = []
        } = req.body;

        // Create a new Smartwatch instance with all values and default processing
        const smartwatch = new Smartwatch({
            name,
            description,
            price,
            offerPrice,
            visitStore,
            emiDescription,
            operatingSystem,
            extraOffers,
            memoryStorageCapacity,
            connectivityTechnology,
            wirelessCommunicationStandard,
            overallDescription,
            closureType,
            waterResistanceLevel,
            language,
            materialType,
            productDescription,
            sportType,
            wirelessCapability,
            networkTech,
            RAMmemoryInstalled,
            boxContents,
            targetAudience,
            manufacturer,
            ageRange,
            modelName,
            modelNumber,
            brandName,
            warrentySupport,
            advantages: splitAndTrim(advantages),
            specialFeatures: splitAndTrim(specialFeatures),
            supportedApplication: splitAndTrim(supportedApplication),
            aboutBrand: splitAndTrim(aboutBrand),
            imageUrl: req.file ? `/smartWatch/${req.file.filename}` : null
        });

        // Save the smartwatch to the database
        await smartwatch.save();

        res.status(201).json(smartwatch);
    } catch (error) {
        console.error('Error creating smartwatch:', error);
        res.status(500).json({ error: error.message || 'Failed to create smartwatch' });
    }
});

// GET Route to fetch all smartwatches
router.get('/', async (req, res) => {
    try {
        const smartwatches = await Smartwatch.find();
        res.status(200).json(smartwatches);
    } catch (error) {
        console.error('Error fetching smartwatches:', error);
        res.status(500).json({ error: error.message || 'Failed to fetch smartwatches' });
    }
});

// DELETE Route for removing a smartwatch
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the smartwatch by ID and remove it
        const smartwatch = await Smartwatch.findByIdAndDelete(id);

        if (!smartwatch) {
            return res.status(404).json({ message: 'Smartwatch not found' });
        }

        // Respond with a success message
        res.status(200).json({ message: 'Smartwatch deleted successfully' });
    } catch (error) {
        console.error('Error deleting smartwatch:', error);
        res.status(500).json({ error: error.message || 'Failed to delete smartwatch' });
    }
});

module.exports = router;
