export type TCategory = "phones" | "headphones" | "laptops";
export type TCategoryFilter = TCategory | "all";
export type TSortOrder = "default" | "price-asc" | "price-desc";

type TUUID = string;

export interface IProduct {
  id: TUUID;
  title: string;
  price: number;
  category: TCategory;
  inStock: boolean;
  description: string;
}
