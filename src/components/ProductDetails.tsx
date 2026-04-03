import type { IProduct } from "../types/product";

interface IProductDetails {
  product: IProduct | undefined;
}

export function ProductDetails({ product }: IProductDetails) {
  if (product === undefined) {
    return <p>Select a product</p>;
  }
  return (
    <>
      <div>
        <h2>{product.title}</h2>
        <h4>{product.price} $</h4>
        <h4>{product.category}</h4>
        <h4>{product.inStock}</h4>
        <h3>{product.description}</h3>
      </div>
    </>
  );
}
