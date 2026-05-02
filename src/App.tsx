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
    return <p className="p-6 text-lg">Loading products...</p>;
  }

  if (error) {
    return <p className="p-6 text-lg text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-neutral-200 px-6 py-4">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-400 flex-col bg-neutral-100">
        <header className="border-b border-neutral-300 px-8 py-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Product Catalog
          </h1>
        </header>

        <main className="grid flex-1 grid-cols-[180px_1fr_220px] gap-8 px-8 py-8">
          <aside className="border-r border-neutral-300 pr-6">
            <ProductList
              products={filteredProducts}
              selectedProductId={selectedProductId}
              onSelect={handleSelect}
            />
          </aside>

          <section className="min-w-0">
            <ProductDetails product={selectedProduct} />
          </section>

          <aside className="border-l border-neutral-300 pl-6">
            <SearchBar
              query={query}
              onQueryChange={handleQuery}
              categoryFilter={categoryFilter}
              onCategoryChange={handleCategory}
              priceSort={priceSort}
              onSortChange={handlePrice}
            />
          </aside>
        </main>

        <footer className="border-t border-neutral-300 px-8 py-5 text-center text-sm text-neutral-500">
          <p>Made by NetKamaa__ 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
