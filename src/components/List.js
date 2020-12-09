import React, {useEffect, useState} from 'react';
import './List.css';
import { TablePerson } from "./TablePerson";
import { PreviewPerson } from "./PreviewPerson";
import { SearchBar } from "./SearchBar";
import data from '../data.json';
import {useDispatch, useSelector} from "react-redux";
import {
  favoriteSelector,
  favoritesSelector,
  insertFavoriteItems,
  toggleFavoriteItem
} from "../reducers/favorites";


const filterByName = name => person => {
  const [personName, personLastName] = person.name.toLowerCase().split(" ")
  const [searchName, searchLastName] = name.toLowerCase().split(" ")

  const fullNameConditionOne = personName.startsWith(searchLastName) && personLastName.startsWith(searchName);
  const fullNameConditionTwo = personName.startsWith(searchName) && personLastName.startsWith(searchLastName);

  const onlyNameCondition = personName.startsWith(searchName) || personLastName.startsWith(searchName);

  if(searchLastName) {
    return fullNameConditionOne || fullNameConditionTwo;
  }
  return onlyNameCondition;
}

const sortFunction = (type) => (a, b) => {
  if (a[type] > b[type]) {
    return 1;
  }
  if (a[type] < b[type]) {
    return -1;
  }
  return 0
}

function List({ view, direction, type }) {
  const [ search, updateSearch ] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(
        insertFavoriteItems(
          data
            .filter(item => item.favourite)
            .map(item => item.id)
        )
      )
    }
  }, [])

  const onClickFavorite = (id) => () => {
    dispatch(toggleFavoriteItem(id))
  };

  const favoritesList = useSelector(favoritesSelector)
  const isFavorite = id => favoriteSelector(id)(favoritesList)

  const Person = view === "preview" ? PreviewPerson : TablePerson;
  const filteredData = data.filter(person => filterByName(search)(person)).sort(sortFunction(type))
  const directedData = direction === "asc" ? filteredData : filteredData.reverse()
  return (
    <div>
      <SearchBar term={search} update={updateSearch}/>
      <div className={`list ${view === "preview" ? "preview-list" : "table-list"}`}>
      {directedData.map((item => (
        <Person {...item} favorite={isFavorite(item.id)} onClickFavorite={onClickFavorite(item.id)}/>
      )))}
    </div>
    </div>
  )
}

export default List