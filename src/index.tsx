import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore} from "redux";

import "./index.css";
import App from "./App";
import { 
  TodoItem, 
  AddOrToggleTodoAction, 
  VisibilityFilter
 } from "./types";

const defaultAction: TodoItem = {
  id: "",
  text: "",
  completed: false
};

const todo = (state: TodoItem = defaultAction, action: AddOrToggleTodoAction): TodoItem => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state: TodoItem[] = [], action: AddOrToggleTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = VisibilityFilter.ALL,
  action: { type: string; filter: VisibilityFilter }
): VisibilityFilter => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <App
      todos={store.getState().todos} 
      visibilityFilter={store.getState().visibilityFilter}
      store={store} 
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
