import fetch from 'node-fetch';
import express from 'express';

const router = express.Router();

router.post('/image', async (req, res) => {
    const { bucket, filePath, base64Data } = req.body;

    try {
        // Convert Base64 to binary
        const buffer = Buffer.from(base64Data, 'base64');

        const response = await fetch(
            `https://${process.env.SUPABASE_URL}/storage/v1/object/${bucket}/${filePath}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, // Use service role key
                    'Content-Type': 'image/png', // Update for correct MIME type
                },
                body: buffer,
            }
        );


        const data = await response.json();

        res.status(201).json({
            status: 201,
            message: 'Image added successfully',
            data,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: `Failed to upload image: ${err.message}`,
        });
    }
});

router.get('/get-all-image', async (req, res) => {
    const bucketName = 'movie-images'; // Replace with your bucket name

    try {
        const response = await fetch(
            `https://${process.env.SUPABASE_URL}/storage/v1/object/list/${bucketName}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`, // Use anon key for public access
                },
            }
        );


        const data = await response.json();

        const publicUrls = data.map((file) => ({
            name: file.name,
            url: `https://${process.env.SUPABASE_URL}/storage/v1/object/public/${bucketName}/${file.name}`,
        }));

        res.status(200).json({
            status: 200,
            message: 'Fetched all images successfully',
            data: publicUrls,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: `Failed to fetch images: ${err.message}`,
        });
    }
});




export default router;
