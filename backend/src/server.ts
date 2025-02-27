import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as productsRouter } from "./routes/products";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
