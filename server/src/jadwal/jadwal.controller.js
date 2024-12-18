import { Router } from 'express';
import {addJadwal, getAllJadwal, getJadwalByFilmId} from './jadwal.service.js';
const router = Router();

router.post("/jadwal", async (req, res) => {

    const jadwalData = req.body;
    try {
        await addJadwal(jadwalData);

        res.status(201).json({
            status: 201,
            message: "jadwal added successfully"
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

router.get("/get-all-jadwal", async (req, res) => {
    try {
        const allJadwals = await getAllJadwal(); 

        res.status(200).json({
            status: 200,
            message: "Get all list_jadwal successfully",
            jadwalData: allJadwals, 
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, 
        });
    }
});

router.get("/get-jadwal-by-film-id", async (req, res) => {
    try {
        const { filmId } = req.query;
        if (!filmId) {
            return res.status(400).json({
                status: 400,
                message: "Missing film_id in query parameters",
            });
        }

        const jadwalData = await getJadwalByFilmId(); 
        if (!jadwalData) {
            return res.status(404).json({
                status: 404,
                message: `No jadwal found with ID: ${filmId}`,
            });
        }

        res.status(200).json({
            status: 200,
            message: "Get all jadwal by film id ${filmId}",
            jadwalData: jadwalData, 
        });

    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, 
        });
    }
});



export default router