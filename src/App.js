import Todos from "./Todos";
import {useState} from 'react'
import AddTodo from "./AddTodo";

function App() {
  let [todos,setTodos]=useState([]);
  // const todos = [
  //   {id:1,content:'Go To Potions Class'},
  //   {id:2,content:'Buy New Robes'},
  //   {id:1,content:'Visit Hagrid'}
  // ]

  
  
  

  return (
    <div className="App">
      <Todos todos={todos} />
      <AddTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
