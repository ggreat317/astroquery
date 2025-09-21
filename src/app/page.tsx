"use client"

import './css/query.css'

import { Profile } from './componenets/profile'
import { Main } from './componenets/main'
import { Search } from './componenets/search'

import { useState } from 'react'

export default function App() {
  const [selection, newSelection] = useState('Akihiko Hoshide');
  const [search, setSearch] = useState("");

  return (
  <div className = "App">
    <Profile selection={selection}></Profile>
    <Main search={search} selection={selection} newSelection={newSelection}></Main>
    <Search search={search} setSearch={setSearch} newSelection={newSelection}></Search>
  </div>
  );
}
