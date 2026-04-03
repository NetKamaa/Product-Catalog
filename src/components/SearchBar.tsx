import type { TCategoryFilter, TSortOrder } from "../types/product";

interface ISearchBar {
  query: string;
  onQueryChange: (value: string) => void;
  categoryFilter: TCategoryFilter;
  onCategoryChange: (category: TCategoryFilter) => void;
  priceSort: TSortOrder;
  onSortChange: (value: TSortOrder) => void;
}

export function SearchBar({
  query,
  onQueryChange: setQuery,
  categoryFilter,
  onCategoryChange: setCategoryFilter,
  priceSort: priceSort,
  onSortChange: setPriceSort,
}: ISearchBar) {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value as TCategoryFilter)}
      >
        <option value="all">all</option>
        <option value="phones">phones</option>
        <option value="headphones">headphones</option>
        <option value="laptops">laptops</option>
      </select>

      <label htmlFor="price-sort">Sort by price:</label>
      <select
        id="price-sort"
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
