import { Router } from 'express';
import {addFilm} from './film.service.js';
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

export default router