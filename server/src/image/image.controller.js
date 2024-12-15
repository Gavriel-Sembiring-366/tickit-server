import { Router } from 'express';
import { addImage, getAllImage } from './image.service.js';
const router = Router();

// Route to add an image
router.post("/image", async (req, res) => {
    const imageData = req.body;

    try {
        const uploadedImage = await addImage(imageData);

        res.status(201).json({
            status: 201,
            message: "Image added successfully",
            data: uploadedImage,
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

// Route to get all images
router.get("/get-all-image", async (req, res) => {
    try {
        const allImages = await getAllImage();

        res.status(200).json({
            status: 200,
            message: "Get all images successfully",
            data: allImages,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

export default router;
