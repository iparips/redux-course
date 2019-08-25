import React from "react";

type Props = {
    onCompletedClick: () => void,
    onActiveClick: () => void,
    onAllClick: () => void
}

export const Footer = ({onCompletedClick, onActiveClick, onAllClick}: Props) => {
    return (
        <div>
            <a href="#" onClick={onAllClick}>All</a>
            <a href="#" onClick={onCompletedClick}>Completed</a>
            <a href="#" onClick={onActiveClick}>Active</a>
        </div>
    );
}