"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = require("./utils/dbConnect");
// all routes
const product_route_1 = __importDefault(require("./routes/product.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 5000 || process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// mongodb connection
(0, dbConnect_1.connectDB)();
// all routes goes here
app.use("/api/product", product_route_1.default);
app.use("api/user", user_route_1.default);
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
