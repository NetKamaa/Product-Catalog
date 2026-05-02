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
      <div className="flex flex-col gap-8 pt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="search" className="text-sm text-neutral-700">
            Search
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 rounded-md border border-neutral-300 bg-white px-3 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-sm text-neutral-700">
            Category
          </label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value as TCategoryFilter)
            }
            className="h-10 rounded-md border border-neutral-300 bg-white px-3 outline-none"
          >
            <option value="all">all</option>
            <option value="phones">phones</option>
            <option value="headphones">headphones</option>
            <option value="laptops">laptops</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price-sort" className="text-sm text-neutral-700">
            Sort by price
          </label>
          <select
            id="price-sort"
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value as TSortOrder)}
            className="h-10 rounded-md border border-neutral-300 bg-white px-3 outline-none"
          >
            <option value="default">default</option>
            <option value="price-asc">Low → High</option>
            <option value="price-desc">High → Low</option>
          </select>
        </div>
      </div>
    </>
  );
}
