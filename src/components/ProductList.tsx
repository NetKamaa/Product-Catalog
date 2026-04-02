import type { IProduct } from "../types/product";
import { ProductCard } from "./ProductCard";

interface IProductListProps {
  product: IProduct[];
  selectedProductId: string | null;
  onSelect: (id: string) => void;
}

export function ProductList({
  product,
  selectedProductId,
  onSelect,
}: IProductListProps) {
  return (
    <>
      <div>
        {product.map((product) => (
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
