import React,{useState} from "react";

function Search({onSearchChange}) {
  
  const [searchItem, setSearchItem] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleChangeSearch (e) {
    const searchText = e.target.value
    // console.log("HI from search component: ",searchText)
    setSearchItem(searchText)
    onSearchChange(searchItem)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={handleChangeSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

