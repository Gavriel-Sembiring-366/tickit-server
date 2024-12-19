import { Router } from 'express';
import {addBangkuTersedia, getAllBangkuTersedia, getBangkuTersediaDataByJadwal} from './bangkuTersedia.service.js';
const router = Router();

router.post("/bangkuTersedia", async (req, res) => {

    const bangkuTersediaData = req.body;
    try {
        await addBangkuTersedia(bangkuTersediaData);

        res.status(201).json({
            status: 201,
            message: "bangkuTersedia added successfully"
        });
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

router.get("/get-all-bangkuTersedia", async (req, res) => {
    try {
        const allBangkuTersedia = await getAllBangkuTersedia(); 

        res.status(200).json({
            status: 200,
            message: "Get all list_bangkuTersedia successfully",
            data: allBangkuTersedia, 
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message, 
        });
    }
});


router.get("/get-bangkuTersedia-by-jadwal-id", async (req, res) => {
    try {
        const { jadwalId } = req.query;
        const bangkuTersediaData = await getBangkuTersediaDataByJadwal(jadwalId)

        res.status(200).json({
            status: 200,
            
            bangkuTersediaData: {
                bangku_tersedia_id: bangkuTersediaData.bangku_tersedia_id,
                jadwal_id: bangkuTersediaData.jadwal_id,  
                nomor_bangku: bangkuTersediaData.nomor_bangku,
            },
            message: "Successfully get bangku tersedia data by id ",jadwal_id,bangkuTersediaData
        });
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }
});
export default router