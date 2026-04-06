import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { seedProducts } from "../src/data/seedProducts";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: seedProducts,
  });

  console.log("Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seeding error:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
