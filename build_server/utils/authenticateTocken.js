"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../utils/token");
exports.authenticateToken = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401);
    const token = authHeader.split(' ')[1];
    const result = token_1.verifyToken(token);
    if (!result)
        return res.status(401);
    req.user = result;
};
