import { useEffect, useMemo, useState } from "react";
import { ProductDetails } from "./components/ProductDetails";
import { ProductList } from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";
import type { IProduct, TCategoryFilter, TSortOrder } from "./types/product";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const [query, setQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<TCategoryFilter>("all");
  const [priceSort, setPriceSort] = useState<TSortOrder>("default");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error(`Failed to load products: ${response.status}`);
        }

        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesQuery = product.title
          .toLowerCase()
          .includes(query.toLowerCase());

        const matchesCategory =
          categoryFilter === "all" || product.category === categoryFilter;

        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (priceSort === "price-asc") return a.price - b.price;
        if (priceSort === "price-desc") return b.price - a.price;
        return 0;
      });
  }, [products, query, categoryFilter, priceSort]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <ProductList
        products={filteredProducts}
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
