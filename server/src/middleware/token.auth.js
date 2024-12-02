import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Token is required" });
        }

        // Ensure JWT_SECRET is defined
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined. Please set it in your environment variables.");
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ error: "Invalid or expired token" });
            }
            req.user = user; // Attach user to request
            next();
        });
    } catch (error) {
        console.error(error.message); // Log error for debugging
        return res.status(500).json({ error: error.message });
    }
}

export default authenticateToken;
