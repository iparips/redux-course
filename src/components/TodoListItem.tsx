import React from "react";
import {TodoItem} from '../types'

type Props = {
    todo: TodoItem
    onClick: (id: string) => (event: React.SyntheticEvent) => void
};

export const TodoListItem = ({todo, onClick}: Props) => {
    return (<li
        key={todo.id}
        onClick={onClick(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </li>)
}