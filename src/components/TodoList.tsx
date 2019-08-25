import React, { SyntheticEvent } from "react";
import {TodoItem} from "../types";
import {TodoListItem} from "./TodoListItem";

type Props = {
    todos: TodoItem[],
    onItemClick: (id: string) => (event: SyntheticEvent) =>  void
};

export const TodoList = ({todos, onItemClick}: Props) => {
    return (<ul>
        {todos.map((todo: TodoItem) => (
            <TodoListItem 
                todo={todo}
                onClick={onItemClick}
            />
        ))}
      </ul>);
}