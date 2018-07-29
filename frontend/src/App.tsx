import * as React from 'react';

import AddTodoButton from "./containers/AddTodoButton";
import TodoList from "./containers/TodoList";
import TopAppBar from './containers/TopAppBar';

function App(): JSX.Element {
  return (
    <div>
      <TopAppBar dummyProp={"HELLO TODO v0.1"} />
      <AddTodoButton />
      <TodoList />
    </div>
  );
}

export default App;
