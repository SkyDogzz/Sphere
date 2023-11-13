type SearchBarProps = {
  search: string,
  setSearch: (search: string) => void
}

export default function Searchbar({search, setSearch}: SearchBarProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <form action="#">
        <input type="text" placeholder="Search for a city or a country" value={search} onChange={handleChange}/>
      </form>
    </div>
  );
}
