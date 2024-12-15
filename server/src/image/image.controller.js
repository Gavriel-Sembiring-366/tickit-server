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

export default router;
