import type { TCategoryFilter } from "../types/product";

interface ISearchBar {
  query: string;
  setQuery: (title: string) => void;
  categoryFilter: TCategoryFilter;
  setCategoryFilter: (category: TCategoryFilter) => void;
}

export function SearchBar({
  query,
  setQuery,
  categoryFilter,
  setCategoryFilter,
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
    </>
  );
}
