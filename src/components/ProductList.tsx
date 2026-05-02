import type { IProduct } from "../types/product";
import { ProductCard } from "./ProductCard";

interface IProductListProps {
  products: IProduct[];
  selectedProductId: string | null;
  onSelect: (id: string) => void;
}

export function ProductList({
  products,
  selectedProductId,
  onSelect,
}: IProductListProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={product.id === selectedProductId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
}
