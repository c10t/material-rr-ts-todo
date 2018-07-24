import * as React from "react";

import Todo from "./Todo";
import * as State from "../states/TodoState";

export interface ITodoListProps {
  todos: State.Todos;
  onTodoClick: (id: number) => void;
}

const TodoList: React.SFC<ITodoListProps> = (props) => {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {todos.map(t => <Todo key={t.id} {...t} onClick={() => onTodoClick(t.id)}/>)}
    </ul>
  )
}

export default TodoList;
