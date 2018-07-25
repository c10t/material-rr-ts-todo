import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTodo, TodoAction } from "../actions";
import AddTodoButton, { IAddTodoButtonProps } from "../components/AddTodoButton";
import { Todos } from "../states/TodoState"

function mapStateToProps(state: Todos): {} {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IAddTodoButtonProps {
  return {
    onSubmit: (s: string) => { dispatch(addTodo(s)) }
  }
}

export default connect<{}, IAddTodoButtonProps, {}>(mapStateToProps, mapDispatchToProps)(AddTodoButton);
