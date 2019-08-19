import React from "react";
import Redux from "redux";

import "./App.css";
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
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: "ADD_TODO",
              text: this.input!.value,
              id: this.nextTodoId++
            });
            this.input!.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map((todo: TodoItem) => (
            <li
              key={todo.id}
              onClick={() => {
                this.props.store.dispatch({
                  type: "TOGGLE_TODO",
                  id: todo.id
                });
              }}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
