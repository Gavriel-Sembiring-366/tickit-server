import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Token is required" });
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined. Please set it in your environment variables.");
        }

        
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.status(403).json({ error: "Invalid or expired token" });
            }
            req.user = user; // Attach user to request
            next();
        });
    } catch (error) {
        console.error('Error during token authentication:', error.message);
        return res.status(500).json({ error: error.message });
    }
}

export default authenticateToken;
