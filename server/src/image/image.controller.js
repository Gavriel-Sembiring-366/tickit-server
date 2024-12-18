import { Router } from 'express';
import { getAllImage,getImageByName } from './image.service.js';
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

router.get("/get-image-by-name", async (req, res) => {
    try {
        const name = req.query.name || req.body?.name;

        if (!name) {
            return res.status(400).json({
                status: 400,
                message: "Image Name is required",
            });
        }

        // Call the function to fetch the image by ID
        const image = await getImageByName(name);

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
