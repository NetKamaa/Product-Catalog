interface ISearchBar {
  query: string;
  setQuery: (title: string) => void;
}

export function SearchBar({ query, setQuery }: ISearchBar) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
