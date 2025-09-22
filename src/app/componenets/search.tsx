import astronauts from '../data/astronauts.json'
import '../css/query.css'

import { useState } from 'react';

export function Search({search, setSearch, newSelection} : {search : string, setSearch: React.Dispatch<React.SetStateAction<string>>, newSelection : React.Dispatch<React.SetStateAction<string>>}){
  const filtered = astronauts.filter(a =>
    (a.Name.toLowerCase().includes(search.toLowerCase()) ||
    a.Country.toLowerCase().includes(search.toLowerCase())));

  const [userEntry, setUserEntry] = useState("");
  const [selectedAstronaut, setSelectedAstronaut] = useState<string | null>(null);

  return(
  <div className="search">
    <form onSubmit={e => {
      e.preventDefault();
      setSearch(userEntry);
    }}>
    <input
          type="text"
          placeholder="Search by name/country"
          value={userEntry}
          onChange={e => setUserEntry(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        </form>
      <div
        className = "searchList"
      >
{filtered.map((a, i) => (
  <div
    key={i}
    onClick={() => {
      setSelectedAstronaut(a.Name);
      newSelection(a.Name);
    }}
    className={`searchEntry ${selectedAstronaut === a.Name ? 'active' : ''}`}
  >
    {a.Name}
  </div>
))}


      </div>
  </div>
  );
}