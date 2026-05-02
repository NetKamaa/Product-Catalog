import type { IProduct } from "../types/product";

interface ICardProps {
  product: IProduct;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function ProductCard({ product, isSelected, onSelect }: ICardProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => onSelect(product.id)}
        className={[
          "w-full rounded-xl px-3 py-2 text-left text-lg transition",
          isSelected
            ? "bg-neutral-900 text-white"
            : "bg-transparent text-neutral-900 hover:bg-neutral-300/60",
        ].join(" ")}
      >
        {product.title}
      </button>
    </>
  );
}
