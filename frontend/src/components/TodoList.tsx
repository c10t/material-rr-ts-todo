import * as React from "react";

import * as State from "../states/TodoState";
import Todo from "./Todo";

export interface ITodoListProps {
  todos: State.Todos;
  onTodoClick: (id: number) => void;
}

function assignHandler(on: (id: number) => void, id: number) {
   return () => on(id)
}

const TodoList: React.SFC<ITodoListProps> = (props) => {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {todos.map(t => <Todo key={t.id} {...t} onClick={assignHandler(onTodoClick, t.id)}/>)}
    </ul>
  )
}

export default TodoList;
