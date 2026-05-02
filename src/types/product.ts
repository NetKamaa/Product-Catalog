export type TCategory = "phones" | "headphones" | "laptops";
export type TCategoryFilter = TCategory | "all";
export type TSortOrder = "default" | "price-asc" | "price-desc";

export interface IProduct {
  id: string;
  title: string;
  price: number;
  category: TCategory;
  inStock: boolean;
  description: string;
  imageUrl: string;
}

export type TSeedProduct = Omit<IProduct, "id">;
