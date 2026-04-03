import { useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import { initialProducts } from "./data/products";
import type { IProduct, TCategoryFilter, TSortOrder } from "./types/product";

function App() {
  const [state] = useState<IProduct[]>(initialProducts);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const [query, setQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<TCategoryFilter>("all");
  const [priceSort, setPriceSort] = useState<TSortOrder>("default");

  function handleSelect(id: string): void {
    setSelectedProductId(id);
  }

  function handleQuery(title: string): void {
    setQuery(title);
  }

  function handleCategory(category: TCategoryFilter): void {
    setCategoryFilter(category);
  }

  function handlePrice(value: TSortOrder): void {
    setPriceSort(value);
  }

  const selectedProduct = state.find(
    (product) => product.id === selectedProductId,
  );

  const filteredProduct = state.filter((product) => {
    const matchesQuery = product.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesQuery && matchesCategory;
  });

  const finalProducts = [...filteredProduct].sort((a, b) => {
    if (priceSort === "price-asc") {
      return a.price - b.price;
    }

    if (priceSort === "price-desc") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <>
      <ProductList
        product={finalProducts}
        selectedProductId={selectedProductId}
        onSelect={handleSelect}
      />

      <SearchBar
        query={query}
        setQuery={handleQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={handleCategory}
        priceSort={priceSort}
        setPriceSort={handlePrice}
      />

      <ProductDetails product={selectedProduct} />
    </>
  );
}

export default App;
