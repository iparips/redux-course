import React from "react";

import "./App.css";
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { Footer } from "./components/Footer"
import { TodoItem, VisibilityFilter } from "./types";

type Props = {
  todos: TodoItem[],
  visibilityFilter: VisibilityFilter,
  store: any
};

class App extends React.Component<Props> {
  private input: HTMLInputElement | null;
  private nextTodoId: number = 0;

  constructor(props: Props) {
    super(props);
    this.input = null;
  }

  private filterTodos(todos: TodoItem[], visibilityFilter: VisibilityFilter): TodoItem[] {
    switch (visibilityFilter) {
      case VisibilityFilter.COMPLETED:
        return todos.filter(todo => todo.completed === true);
      case VisibilityFilter.ACTIVE:
          return todos.filter(todo => todo.completed === false);
      default:
        return todos;
    }
  }

  render() {
    const todos = this.filterTodos(this.props.todos, this.props.visibilityFilter);

    return (
      <div>
        <AddTodo addOnClick={ (value: string) => {
            this.props.store.dispatch({
              type: "ADD_TODO",
              text: value,
              id: this.nextTodoId++
            });
          }
        }/>
        <TodoList 
          todos={todos} 
          onItemClick={(id) => (event) => {
            this.props.store.dispatch({
              type: "TOGGLE_TODO",
              id
            });
          }}
        />
        <Footer 
          onCompletedClick={() => {
            this.props.store.dispatch({
              type: "SET_VISIBILITY_FILTER",
              filter: VisibilityFilter.COMPLETED
            });
          }}
          onActiveClick={() => {
            this.props.store.dispatch({
              type: "SET_VISIBILITY_FILTER",
              filter: VisibilityFilter.ACTIVE
            });
          }}
          onAllClick={() => {
            this.props.store.dispatch({
              type: "SET_VISIBILITY_FILTER",
              filter: VisibilityFilter.ALL
            });
          }}
        />
      </div>
    );
  }
}

export default App;
