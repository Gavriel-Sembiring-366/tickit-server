import { Router } from 'express';
import { getAllImage } from './image.service.js';
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
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({
                status: 400,
                message: "Image ID is required",
            });
        }

        const image = await getImageById(id);

        // Respond with the image data
        res.status(200).json({
            status: 200,
            message: "Get image successfully",
            data: image,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

export default router;
