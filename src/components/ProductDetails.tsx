import type { IProduct } from "../types/product";

interface IProductDetails {
  product: IProduct | undefined;
}

export function ProductDetails({ product }: IProductDetails) {
  if (product === undefined) {
    return (
      <div className="flex min-h-155 items-center justify-center rounded-[28px] bg-neutral-200 p-8 text-center">
        <p className="text-2xl text-neutral-600">
          Choose a product on the left
        </p>
      </div>
    );
  }
  return (
    <>
      <div
        className={[
          "rounded-[28px] bg-neutral-200 p-5",
          product.inStock ? "" : "opacity-80",
        ].join(" ")}
      >
        <div className="flex h-85 items-center justify-center rounded-2xl bg-white p-6">
          <img
            className={[
              "h-full w-full object-contain",
              product.inStock ? "" : "grayscale",
            ].join(" ")}
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        <div className="mt-6>">
          <div className="flex items-end gap-3">
            <h2 className="mt-3 text-[34px] font-semibold leading-none text-neutral-950">
              {product.title}
            </h2>
            <span
              className={[
                "mb-1.5 inline-block h-3.5 w-3.5 rounded-full",
                product.inStock ? "bg-green-500" : "bg-red-500",
              ].join(" ")}
            />
          </div>

          <p className="mt-4 text-2xl font-medium leading-none text-neutral-950">
            {product.price} $
          </p>

          <p className="mt-5 max-w-[72ch] text-lg leading-8 text-neutral-700">
            {product.description}
          </p>
        </div>
      </div>
    </>
  );
}
