import fetch from 'node-fetch';

export const getAllImage = async () => {
    const bucketName = 'movie_images'; // Specify your bucket name

    const response = await fetch(
        `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucketName}/`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`, // Use the Anon Key for public access
            },
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to fetch images: ${error.message}`);
    }

    const data = await response.json();

    // Construct public URLs
    return data.map((file) => ({
        name: file.name,
        url: `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucketName}/${file.name}`,
    }));
};