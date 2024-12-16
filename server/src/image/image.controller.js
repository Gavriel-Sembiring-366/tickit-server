import { Router } from 'express';
import { getAllImage,getImageById } from './image.service.js';
const router = Router();


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

router.get("/get-image-by-id", async (req, res) => {
    try {
        // Try to extract 'id' from query or body
        const id = req.query.id || req.body?.id;

        // Validate the 'id' parameter
        if (!id) {
            return res.status(400).json({
                status: 400,
                message: "Image ID is required",
            });
        }

        // Call the function to fetch the image by ID
        const image = await getImageById(id);

        res.setHeader('Content-Type', image.contentType);
        res.send(image.data); // Send the binary image data directly
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

export default router;
