import type { IProduct } from "../types/product";

interface ICardProps {
  product: IProduct;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function ProductCard({ product, isSelected, onSelect }: ICardProps) {
  return (
    <>
      <div
        className={`${isSelected ? true : false}`}
        onClick={() => onSelect(product.id)}
      >
        <h3>{product.title}</h3>
      </div>
    </>
  );
}
