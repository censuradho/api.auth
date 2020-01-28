"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const MessageSchema = new mongoose_1.Schema({
    subject: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    completedAt: {
        type: Date
    },
    tags: {
        type: mongoose_1.Schema.Types.ObjectId,
        ef: 'Tag'
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Message', MessageSchema);
