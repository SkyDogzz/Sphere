type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
};

export default function Searchbar({ search, setSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="searchbar my-4">
      <form className="flex justify-center">
        <input
          type="text"
          className="form-control p-2 border border-gray-300 rounded"
          placeholder="Search for a city or a country"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}