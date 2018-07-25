import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoAction, toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { Todos } from "../states/TodoState"

interface IStateFromProps {
  todos: Todos,
}

interface IDispatchFromProps {
  onTodoClick: (id: number) => void,
}

function mapStateToProps(state: Todos): IStateFromProps {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IDispatchFromProps {
  return {
    onTodoClick: (id: number) => { dispatch(toggleTodo(id)) }
  }
}

export default connect<IStateFromProps, IDispatchFromProps, {}>(
  mapStateToProps, mapDispatchToProps
)(TodoList);
