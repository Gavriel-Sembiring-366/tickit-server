import { Router } from 'express';
import {addJadwal, getAllJadwal} from './jadwal.service.js';
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
            data: allJadwals, 
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, 
        });
    }
});

export default router