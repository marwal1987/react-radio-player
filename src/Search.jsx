export default function Search({ setSearchTerm }) {
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div id="searchbar">
      <h1>Sveriges Radio</h1>
      <div>
        <label htmlFor="search"><strong>Sök: </strong></label>
        <input id="search" onChange={handleSearch}></input>
      </div>
    </div>
  );
}
