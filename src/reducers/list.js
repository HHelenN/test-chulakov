import { parse } from "query-string";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { history } from "../history";

const { type, direction, view } = parse(history.location.search)

const initialState = {
  type: type || 'name',
  direction: direction || 'asc',
  view: view || 'table'
}

export const changeTypeAction = createAction('list/changeType')
export const changeDirectionAction = createAction('list/changeDirection')
export const changeViewAction = createAction('list/changeView')


export const list = createReducer(initialState, (builder) => {
  builder
    .addCase(changeViewAction, (state, action) => ({
      ...state,
      view: action.payload
    }))
    .addCase(changeDirectionAction, (state, action) => ({
      ...state,
      direction: action.payload
    }))
    .addCase(changeTypeAction, (state, action) => ({
      ...state,
      type: action.payload
    }))
})
