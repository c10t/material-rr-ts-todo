import * as React from 'react';

import AddTodoButton from "./containers/AddTodoButton";
import TodoList from "./containers/TodoList";

function App(): JSX.Element {
  return (
    <div>
      <AddTodoButton />
      <TodoList />
    </div>
  );
}

export default App;
