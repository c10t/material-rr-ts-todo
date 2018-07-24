import * as React from "react";

interface ITodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}

export const Todo: React.SFC<ITodoProps> = (props) => {
  const { completed, text, onClick } = props;
  return (
    <li
      onClick={onClick}
      style={ {textDecoration: completed ? 'line-through' : 'none'} }
    >
      {text}
    </li>
  )
}

export default Todo;
