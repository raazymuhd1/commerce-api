import express from "express"
import { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } from "../controllers/product.controller"

const router = express.Router()

router.get("/:id", getSingleProduct)
router.get("/all-products", getAllProducts)
router.post("/add-product", addProduct)
router.delete("/delete-product", deleteProduct)
router.put("/update-product", updateProduct)
router.post("/checkout", () => {})

export default router;
