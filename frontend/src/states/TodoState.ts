export interface ITodo {
  completed: boolean;
  id: number;
  text: string;
}

export type Todos = ITodo[];

let currentId: number = 0;

const generateTodo: (text: string, id: number) => ITodo = (text, id) => {
  return { completed: false, id, text }
}

export function generateTodos(text: string[]): ITodo[] {
  return text.map(t => { 
    const res = generateTodo(t, currentId);
    currentId++;
    return res;
  })
}

export default generateTodos;
