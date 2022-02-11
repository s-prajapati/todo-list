import Todos from "./Todos";
import {useState} from 'react'
import AddTodo from "./AddTodo";
import CompleteTodo from "./CompletedTodo";

function App() {
  let [todos,setTodos]=useState([]);
  // const todos = [
  //   {id:1,content:'Go To Potions Class'},
  //   {id:2,content:'Buy New Robes'},
  //   {id:1,content:'Visit Hagrid'}
  // ]
  let [remtask,setRemtask]=useState(false);
  let [completeTodos,setCompleteTodos]=useState([]);
  const deleteTodo = (id) => {
    const compTask = [...completeTodos,todos[id-1]];
    setCompleteTodos(compTask);
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div style={{background:"#f7f7f7"}} className="main">

        <Todos todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} setCompleteTodos={setCompleteTodos}/>
        <AddTodo todos={todos} setTodos={setTodos} remtask={remtask} setRemtask={setRemtask} />

      </div>
      <div  style={{width:"40px", opacity:"0"}} className="temp"></div>
      {remtask && <>
        <div style={{background:"#f7f7f7"}} className="completed-task">
        <CompleteTodo completeTodos={completeTodos}/>
        </div>
      </>}
      
    </div>
  );
}

export default App;
