import { Router } from 'express';
import {addBioskop, getAllBioskop} from './bioskop.service.js';
const router = Router();

router.post("/bioskop", async (req, res) => {

    const bioskopData = req.body;
    try {
        await addBioskop(bioskopData);

        res.status(201).json({
            status: 201,
            message: "bioskop added successfully"
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

router.get("/get-all-bioskop", async (req, res) => {
    try {
        const allBioskops = await getAllBioskop(); 

        res.status(200).json({
            status: 200,
            message: "Get all list_bioskop successfully",
            data: allBioskops, 
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, 
        });
    }
});

export default router