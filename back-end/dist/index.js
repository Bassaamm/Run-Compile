"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const IDERoute_1 = require("./routes/IDERoute");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    credentials: true,
    origin: "*",
}));
app.use(express_1.default.json());
app.use("/ide", IDERoute_1.IDErouter);
app.use("/", (req, res) => {
    return res.send("API is working");
});
app.use("/checkapistatus", (req, res) => {
    return res.json({ status: "API is working" });
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
//# sourceMappingURL=index.js.map