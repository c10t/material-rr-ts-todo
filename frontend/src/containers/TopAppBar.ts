import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoAction } from "../actions";
import TopAppBar from "../components/TopAppBar";
import { Todos } from "../states/TodoState"

function mapStateToProps(state: Todos): {} {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): {} {
  return {}
}

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(TopAppBar);
