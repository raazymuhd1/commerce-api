"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
router.get("/:id", product_controller_1.getSingleProduct);
router.get("/all-products", product_controller_1.getAllProducts);
router.post("/add-product", product_controller_1.addProduct);
router.delete("/delete-product", product_controller_1.deleteProduct);
router.put("/update-product", product_controller_1.updateProduct);
router.post("/checkout", () => { });
exports.default = router;
