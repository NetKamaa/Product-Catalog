import type { IProduct } from "../types/product";

export const initialProducts: IProduct[] = [
  {
    id: crypto.randomUUID(),
    title: "iPhone 17e",
    price: 719,
    category: "phones",
    inStock: true,
    description:
      "The entry-level 2026 iPhone, featuring a 6.1-inch Super Retina XDR display and Apple Intelligence.",
  },
  {
    id: crypto.randomUUID(),
    title: "iPhone 17",
    price: 969,
    category: "phones",
    inStock: true,
    description:
      "The 2026 standard iPhone: a well-rounded model for everyday use, photography, and video.",
  },
  {
    id: crypto.randomUUID(),
    title: "iPhone 17 Pro",
    price: 1329,
    category: "phones",
    inStock: true,
    description:
      "The premium 2026 iPhone for those who value a top-of-the-line camera, performance, and Pro features.",
  },

  {
    id: crypto.randomUUID(),
    title: "AirPods 4",
    price: 149,
    category: "headphones",
    inStock: true,
    description:
      "Apple's entry-level wireless earbuds, featuring a comfortable fit and high-quality spatial audio.",
  },
  {
    id: crypto.randomUUID(),
    title: "AirPods Pro 3",
    price: 249,
    category: "headphones",
    inStock: true,
    description:
      "Apple's flagship in-ear headphones with active noise cancellation and a heart rate monitor for workouts.",
  },
  {
    id: crypto.randomUUID(),
    title: "AirPods Max 2",
    price: 579,
    category: "headphones",
    inStock: true,
    description:
      "Apple's premium full-size headphones with powerful ANC, adaptive audio, and lossless audio via USB-C.",
  },

  {
    id: crypto.randomUUID(),
    title: "MacBook Neo",
    price: 699,
    category: "laptops",
    inStock: true,
    description:
      "The most affordable 2026 Apple laptop: 13-inch Liquid Retina display and aluminum chassis.",
  },
  {
    id: crypto.randomUUID(),
    title: "MacBook Air",
    price: 1199,
    category: "laptops",
    inStock: true,
    description:
      "A lightweight and versatile Apple laptop powered by the M5 chip, perfect for school, work, development, and everyday tasks.",
  },
  {
    id: crypto.randomUUID(),
    title: "MacBook Pro",
    price: 1929,
    category: "laptops",
    inStock: true,
    description:
      "A professional Apple laptop for demanding tasks: coding, video editing, design, and large-scale projects.",
  },
];
