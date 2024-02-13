
function authMiddleware(req, res, next) {
    const token = req.query.token;

    if (!token || token !== "12345") {
        return res.status(401).json({ error: "Unauthorized: Token is missing or invalid" });
    }

    const userRole = "admin"; 
    if (userRole !== "admin") {
        return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
    }

    next();
}

module.exports = authMiddleware;
