import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core";
import List from "@material-ui/core/List";

import * as React from "react";

import * as State from "../states/TodoState";
import Todo from "./Todo";

const styles = createStyles({
  list: {
    padding: 10,
  },
  root: {
    padding: 0,
  },
});

type ClassNames = keyof typeof styles;

export interface ITodoListProps {
  todos: State.Todos;
  onTodoClick: (id: number) => void;
}

function assignHandler(on: (id: number) => void, id: number) {
   return () => on(id)
}

export const TodoList: React.SFC<ITodoListProps> = 
  (props: ITodoListProps & WithStyles<ClassNames>) => {
  const { classes, todos, onTodoClick } = props;
  return (
    <List className={classes.list}>
      {todos.map(t => <Todo key={t.id} {...t} onClick={assignHandler(onTodoClick, t.id)}/>)}
    </List>
  )
}

export default withStyles<{} & ClassNames>(styles)<ITodoListProps>(TodoList);
