"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const hashpass_1 = require("../utils/hashpass");
const token_1 = require("../utils/token");
const User_1 = __importDefault(require("../model/User"));
// erros
const erros_1 = require("../erros");
exports.default = {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, rePassword, email } = req.body;
            if (password !== rePassword) {
                return res.json({ err: erros_1.PASSWORD_NOT_MATCH }).status(401);
            }
            const checkUserExist = yield User_1.default.findOne({ email });
            if (checkUserExist) {
                return res.json({ err: erros_1.USER_ALREADY_EXIST }).status(401);
            }
            const encriptedPassword = yield hashpass_1.hashPassword(password);
            const payload = {
                ist: Date.now() + 3600
            };
            try {
                yield User_1.default.create({
                    password: encriptedPassword,
                    email
                });
                const token = yield token_1.generateToken(payload);
                return res.json({ token });
            }
            catch (err) {
                console.log(err);
            }
        });
    },
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const findUser = yield User_1.default.findOne({ email });
            if (!findUser) {
                return res.status(404).json({ err: erros_1.USER_ERROR_CREDENTOALS });
            }
            const isMatch = yield hashpass_1.comparePassword(password, findUser.password);
            if (!isMatch) {
                return res.status(404).json({ err: erros_1.USER_ERROR_CREDENTOALS });
            }
            const payload = {
                ist: Date.now() + 3600,
                admin: false
            };
            const token = yield token_1.generateToken(payload);
            return res.json({ token });
        });
    }
};
