const jwt = require('jsonwebtoken');
const config = require('../config');

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({ 
            error: "Token não informado."
        })
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {        
        if(err){
            console.log(err);
            return res.status(401).json({ 
                error: "Token informado é invalido!"
            });
        }

        req.userId = decoded.id

        return next();
    });
}

module.exports = authMiddleware;