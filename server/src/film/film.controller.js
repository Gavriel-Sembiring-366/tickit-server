import { Router } from 'express';
import {addFilm, getAllFilms} from './film.service.js';
const router = Router();

router.post("/film", async (req, res) => {

    const filmData = req.body;
    try {
        await addFilm(filmData);

        res.status(201).json({
            status: 201,
            message: "film added successfully"
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

router.get("/get-all-films", async (req, res) => {
    try {
        const allFilms = await getAllFilmsDB(); // Assuming this function fetches the films from the DB

        res.status(200).json({
            status: 200,
            message: "Get all films successfully",
            data: allFilms, // Include the fetched films in the response
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, // Send error message for debugging
        });
    }
});

export default router