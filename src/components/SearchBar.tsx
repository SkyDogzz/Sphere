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
      <form className="d-flex justify-content-center">
        <input type="text" className="form-control w-50" placeholder="Search for a city or a country" value={search} onChange={handleChange} />
      </form>
    </div>
  );
}
