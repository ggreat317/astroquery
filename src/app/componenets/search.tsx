import astronauts from '../data/astronauts.json'
import '../css/query.css'

export function Search({search, setSearch, newSelection} : {search : string, setSearch: React.Dispatch<React.SetStateAction<string>>, newSelection : React.Dispatch<React.SetStateAction<string>>}){
  const filtered = astronauts.filter(a =>
    (a.Name.toLowerCase().includes(search.toLowerCase()) ||
    a.Country.toLowerCase().includes(search.toLowerCase())));

  return(
  <div className="search">
    <input
          type="text"
          placeholder="Search by name or country"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
      <div
        className = "searchList"
      >
        {filtered.map((a, i) => (
          <div
            key={i}
            onClick={() => newSelection(a.Name)}
            className="searchEntry"
          >
            {a.Name}
          </div>
        ))}
      </div>
  </div>
  );
}