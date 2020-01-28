"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("../controllers/Users"));
const authRoutes = express_1.Router();
authRoutes.post('/api.signup', Users_1.default.store);
authRoutes.post('/api.signin', Users_1.default.index);
exports.default = authRoutes;
