export type AddOrToggleTodoAction = {
    type: string; 
    id: string; 
    text: string; 
}
  
export type TodoItem = {
    id: string; 
    text: string; 
    completed: boolean;
};

export enum VisibilityFilter {
    ALL = "ALL",
    COMPLETED = "COMPLETED",
    ACTIVE = "ACTIVE"
}

export type AppState = {
    todos: TodoItem[],
    visibilityFilter: VisibilityFilter
}