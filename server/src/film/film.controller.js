import { Router } from 'express';
import {addFilm, getAllFilm, getFilmsByGenre} from './film.service.js';
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
        const allFilms = await getAllFilm(); // Assuming this function fetches the films from the DB

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



router.get("/get-film-by-genre", async (req, res) => {
    try {
        const { genre } = req.query;
        const filmData = await getFilmsByGenre(genre)

        res.status(200).json({
            status: 200,
            message: "Successfully get user data",
            userData: {
                judul: filmData.judul,
                genre_film: filmData.genre_film,  
                durasi: filmData.durasi,
                sinopsis: filmData.sinopsis,
                sutradara: filmData.sutradara,
                tahun_rilis: filmData.tahun_rilis,
                umur_rating: filmData.umur_rating,
                status_film: filmData.status_film
            }
        });
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }
});


export default router