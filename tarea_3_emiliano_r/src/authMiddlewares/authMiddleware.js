const middleware = (req, res, next) => {
    const { token } = req.query;
    if (token !== 'xd') {
        return res.status(401).send({ message: "No autorizado" });
    }
    next();
};

function role(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).send({ message: "Acceso denegado" });
    }
    next(); 
}

module.exports = {
    auth_midd: middleware,
    ridez_midd: role
};
