import * as enzyme from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";

import { TodoActionType } from "../actions"

import todos from "./todos";

enzyme.configure({ adapter: new Adapter() });

it("lenders text when completed=true", () => {
  let state = [
    {completed: false, id: 0, text: "hello"}
  ];

  state = todos(state, {id: 1, text: "goodbye", type: TodoActionType.ADD_TODO});

  expect(state).toEqual([
    {completed: false, id: 0, text: "hello"},
    {completed: false, id: 1, text: "goodbye"},
  ]);
});
