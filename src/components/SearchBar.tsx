import type { TCategoryFilter, TSortOrder } from "../types/product";

interface ISearchBar {
  query: string;
  setQuery: (title: string) => void;
  categoryFilter: TCategoryFilter;
  setCategoryFilter: (category: TCategoryFilter) => void;
  priceSort: TSortOrder;
  setPriceSort: (value: TSortOrder) => void;
}

export function SearchBar({
  query,
  setQuery,
  categoryFilter,
  setCategoryFilter,
  priceSort: priceSort,
  setPriceSort: setPriceSort,
}: ISearchBar) {
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value as TCategoryFilter)}
      >
        <option value="all">all</option>
        <option value="phones">phones</option>
        <option value="headphones">headphones</option>
        <option value="laptops">laptops</option>
      </select>

      <select
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value as TSortOrder)}
      >
        <option value="default">default</option>
        <option value="price-asc">Low → High</option>
        <option value="price-desc">High → Low</option>
      </select>
    </>
  );
}
