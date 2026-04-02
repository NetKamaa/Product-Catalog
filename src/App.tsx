import { useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { initialProducts } from "./data/products";
import type { IProduct } from "./types/product";

function App() {
  const [state] = useState<IProduct[]>(initialProducts);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  function handleSelect(id: string): void {
    setSelectedProductId(id);
  }

  const selectedProduct = state.find(
    (product) => product.id === selectedProductId,
  );

  return (
    <>
      <ProductList
        product={state}
        selectedProductId={selectedProductId}
        onSelect={handleSelect}
      />

      <ProductDetails product={selectedProduct} />
    </>
  );
}

export default App;
