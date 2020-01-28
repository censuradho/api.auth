"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
// routes
const auth_1 = __importDefault(require("./routes/auth"));
const app = express_1.default();
dotenv_1.default.config();
mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-anovo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
// middlewars
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(auth_1.default);
// servir o front
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
});
exports.default = app;
