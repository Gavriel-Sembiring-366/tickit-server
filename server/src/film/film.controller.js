import { Router } from 'express';
import { addFilm, getAllFilm, getFilmsByStatus, getFilmById } from './film.service.js'; // Import getFilmById function

const router = Router();

// Add a new film
router.post("/film", async (req, res) => {
    const filmData = req.body;
    try {
        await addFilm(filmData);
        res.status(201).json({
            status: 201,
            message: "Film added successfully",
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

// Get all films
router.get("/get-all-films", async (req, res) => {
    try {
        const allFilms = await getAllFilm();
        res.status(200).json({
            status: 200,
            message: "Get all films successfully",
            data: allFilms,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

// Get film by status
router.get("/get-film-by-status", async (req, res) => {
    try {
        const { status } = req.query;
        const filmData = await getFilmsByStatus(status);
        res.status(200).json({
            status: 200,
            message: "Successfully retrieved film data",
            filmData,
        });
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message,
        });
    }
});

// Get film by ID
router.get("/get-film-by-id", async (req, res) => {
    try {
        const { filmId } = req.query;
        if (!filmId) {
            return res.status(400).json({
                status: 400,
                message: "Missing film_id in query parameters",
            });
        }

        const filmData = await getFilmById(filmId); // Fetch film data by ID
        if (!filmData) {
            return res.status(404).json({
                status: 404,
                message: `No film found with ID: ${filmId}`,
            });
        }

        res.status(200).json({
            status: 200,
            message: "Successfully retrieved film data",
            filmData,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

export default router;
