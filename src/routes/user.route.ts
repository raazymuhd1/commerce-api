import express from "express"

const router = express.Router();

router.post("/register", () => {})
router.post("/login", () => {})

router.put("/update-user/:userId", () => {})
router.delete("/delete-user/:userId", () => {})

export default router;