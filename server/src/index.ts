import cors from "cors";
import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/products", async (_req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(products);
  } catch (error) {
    console.error("Failed to lead products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
