import React, { useState } from "react";

export default function Searchbar() {

  const [search, setSearch] = useState("");

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
