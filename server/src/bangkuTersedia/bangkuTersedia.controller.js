import { Router } from 'express';
import {
  addBangkuTersedia,
  getAllBangkuTersedia,
  getBangkuTersediaDataByJadwal,
  deleteBangkuTersediaById
} from './bangkuTersedia.service.js';

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
    });
  }
});

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
    const bangkuTersediaData = await getBangkuTersediaDataByJadwal(jadwalId);

    res.status(200).json({
      status: 200,
      bangkuTersediaData,
      message: "Successfully retrieved bangkuTersedia data by jadwalId",
    });
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: err.message
    });
  }
});

router.delete("/delete-bangkuTersedia-by-id", async (req, res) => {
    try {
        const { bangkuTersediaId } = req.query;

        // Validate if bangku_tersedia_id is provided
        if (!bangkuTersediaId) {
            return res.status(400).json({
                status: 400,
                message: "bangku_tersedia_id is required",
            });
        }
        const deletedBangkuTersedia = await deleteBangkuTersediaById(bangkuTersediaId); 
        res.status(200).json({
            status: 200,
            message: "BangkuTersedia deleted successfully",
            data: deletedBangkuTersedia,
        });
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
});


export default router;
