import React, { useState } from 'react';
import './List.css';
import { TablePerson } from "./TablePerson";
import { PreviewPerson } from "./PreviewPerson";
import { SearchBar } from "./SearchBar";
import data from '../data.json';

const filterByName = name => person => (
  person.name.split(" ")[0].toLowerCase().startsWith(name.toLowerCase()) ||
  person.name.split(" ")[1].toLowerCase().startsWith(name.toLowerCase())
);

const sortFunction = (type, direction) => (a, b) => {
  return 0;
}

function List({ view }) {
  const [ search, updateSearch ] = useState("")
  const [ sortingDirection, setSortingDirection ] = useState("asc") // desc
  const [ sortingType, setSortingType ] = useState("name") // id, blah
  const Person = view === "preview" ? PreviewPerson : TablePerson;
  const filteredData = data.filter(filterByName(search)).sort(sortFunction(sortingType, sortingDirection))
  return (
    <div className={`list ${view === "preview" ? "preview-list" : "table-list"}`}>
      <SearchBar term={search} update={updateSearch}/>
      {filteredData.map((item => (
        <Person {...item} />
      )))}
    </div>
  )
}
export default List