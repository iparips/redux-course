import React from "react";

import "./App.css";
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { TodoItem } from "./types";

type Props = {
  todos: TodoItem[];
  store: any
};

class App extends React.Component<Props> {
  private input: HTMLInputElement | null;
  private nextTodoId: number = 0;

  constructor(props: Props) {
    super(props);
    this.input = null;
  }

  render() {
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
          todos={this.props.todos} 
          onItemClick={(id) => (event) => {
            this.props.store.dispatch({
              type: "TOGGLE_TODO",
              id
            });
          }}
        />
      </div>
    );
  }
}

export default App;
