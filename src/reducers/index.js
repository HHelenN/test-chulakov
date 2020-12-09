import { combineReducers } from "@reduxjs/toolkit";

import { list } from "./list";
import { favorites } from "./favorites";


export const reducer = combineReducers({
  list,
  favorites
})
