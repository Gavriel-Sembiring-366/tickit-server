import { Router } from 'express';
import getUserDataById from './user.service.js';
import authenticateToken from '../middleware/token.auth.js';
const router = Router();

router.get("/profile", authenticateToken, async (req, res) => {

    try {
        const { userId } = req.user;
        const userRawData = await getUserDataById(userId)

        res.status(200).json({
            status: 200,
            message: "Successfully get user data",
            userData: {
                fullName: userRawData.name,
                userName: userRawData.username,
                email: userRawData.email
            }
        });
    } catch (err) {
        return res.status(401).json({
            status: 401,
            message: err.message
        })
    }
})

export default router