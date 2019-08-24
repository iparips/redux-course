import React from "react";

import "./App.css";
import { AddTodo } from "./components/AddTodo"
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
