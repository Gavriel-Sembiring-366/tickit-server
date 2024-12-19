import { Router } from "express";
import {
    addBioskop,
    getAllBioskop,
    getBioskopById,
    findBioskopListByNama,
} from "./bioskop.service.js";

const router = Router();

router.post("/bioskop", async (req, res) => {
    const bioskopData = req.body;
    try {
        const addedBioskop = await addBioskop(bioskopData);
        res.status(201).json({
            status: 201,
            message: "Bioskop added successfully",
            bioskopData: addedBioskop,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

router.get("/bioskop", async (req, res) => {
    try {
        const allBioskop = await getAllBioskop();
        res.status(200).json({
            status: 200,
            message: "Get all bioskop successfully",
            bioskopData: allBioskop,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

router.get("/bioskop/get-bioskop-by-id", async (req, res) => {
    const { bioskopId } = req.query;
    try {
        const bioskop = await getBioskopById(bioskopId);
        if (!bioskop) {
            return res.status(404).json({
                status: 404,
                message: `Bioskop with ID ${bioskopId} not found`,
            });
        }
        res.status(200).json({
            status: 200,
            message: `Get bioskop with ID ${bioskopId} successfully`,
            bioskopData: bioskop,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

router.get("/bioskop/nama/", async (req, res) => {
    const { name } = req.params;
    try {
        const bioskopList = await findBioskopListByNama(name);
        res.status(200).json({
            status: 200,
            message: `Get bioskop by name '${name}' successfully`,
            bioskopData: bioskopList,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});

export default router;
