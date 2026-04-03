import { useEffect, useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import { initialProducts } from "./data/products";
import type { IProduct, TCategoryFilter, TSortOrder } from "./types/product";

function App() {
  const [products] = useState<IProduct[]>(initialProducts);
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

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId,
  );

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesQuery && matchesCategory;
  });

  const finalProducts = [...filteredProducts].sort((a, b) => {
    if (priceSort === "price-asc") {
      return a.price - b.price;
    }

    if (priceSort === "price-desc") {
      return b.price - a.price;
    }

    return 0;
  });

  useEffect(() => {
    if (selectedProduct) {
      document.title = selectedProduct!.title;
      return;
    }
    document.title = `Products: ${finalProducts.length}`;
  }, [selectedProduct, finalProducts.length]);

  useEffect(() => {
    localStorage.setItem("catalog-category", categoryFilter);
  }, [categoryFilter]);

  useEffect(() => {
    localStorage.setItem("catalog-price", priceSort);
  }, [priceSort]);

  return (
    <>
      <ProductList
        products={finalProducts}
        selectedProductId={selectedProductId}
        onSelect={handleSelect}
      />

      <SearchBar
        query={query}
        onQueryChange={handleQuery}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategory}
        priceSort={priceSort}
        onSortChange={handlePrice}
      />

      <ProductDetails product={selectedProduct} />
    </>
  );
}

export default App;
