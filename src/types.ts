export type Action = {
    type: string; 
    id: string; 
    text: string; 
}
  
export type TodoItem = {
    id: string; 
    text: string; 
    completed: boolean;
};