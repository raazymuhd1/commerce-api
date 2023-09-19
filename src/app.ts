import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./utils/dbConnect"
// all routes
import productsRoute from "./routes/product.route"
import usersRoute from "./routes/user.route"

dotenv.config()
const app = express()
const PORT = 5000 || process.env.PORT

app.use(cors());
app.use(express.json())

// mongodb connection
connectDB()

// all routes goes here
app.use("/api/product", productsRoute)
app.use("api/user", usersRoute)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))