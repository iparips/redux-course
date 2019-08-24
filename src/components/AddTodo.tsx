import React from "react";

type Props = {
    addOnClick: (value: string) => void
}

export const AddTodo = ({ addOnClick }: Props) => {
    let input: HTMLInputElement | null;
    return (
    <div>
        <input ref={node => { input = node; }} />
        <button onClick={() => {
            addOnClick(input!.value)
            input!.value = ''
        }}>Add Todo</button>
    </div>
)};