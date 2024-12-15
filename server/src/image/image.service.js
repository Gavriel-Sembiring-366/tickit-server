import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<your-project-id>.supabase.co';
const supabaseKey = '<your-api-key>';
const supabase = createClient(supabaseUrl, supabaseKey);

// Add image to the bucket
export const addImage = async (imageData) => {
    const { bucket, filePath, base64Data } = imageData;

    // Convert Base64 to binary
    const buffer = Buffer.from(base64Data, 'base64');

    // Upload to Supabase bucket
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .upload(filePath, buffer, {
            contentType: 'image/png', // Replace with the correct content type
            upsert: true, // Overwrites if the file already exists
        });

    if (error) {
        throw new Error(`Failed to upload image: ${error.message}`);
    }

    return data;
};

// Get all images from a bucket
export const getAllImage = async () => {
    const bucketName = '<your-bucket-name>'; // Specify the bucket name

    const { data, error } = await supabase
        .storage
        .from(bucketName)
        .list('', {
            limit: 100, // Adjust the limit as needed
            offset: 0,
        });

    if (error) {
        throw new Error(`Failed to fetch images: ${error.message}`);
    }

    // Return file names or construct public URLs for the images
    const publicUrls = data.map((file) => ({
        name: file.name,
        url: `${supabaseUrl}/storage/v1/object/public/${bucketName}/${file.name}`,
    }));

    return publicUrls;
};
    