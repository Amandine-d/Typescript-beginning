// function Todos(props) {

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//props: { items: string[]} => props is an object, with the items key, which itself holds an array of strings
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //<> React.FC is already a generic type
  //we are using a generi type here, before we defined it

  //makes it clear that this acts as a Functional Component
  //will allow props to receive a children property
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

