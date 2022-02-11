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
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(newTodos)
  }
  const complete =(id)=>{
    // let tempTodos= todos;
    // tempTodos[id-1].isCompleted=true;
    // setTodos(tempTodos);
    // const compTask = [...completeTodos,todos[id-1]];
    // // setCompleteTodos(compTask);
  }
  const uncomplete = (id)=>{
    // const revertcompTask = completeTodos.filter((todo)=>{return todo.id!=id});
    // setCompleteTodos(revertcompTask);
  }

  return (
    <div className="App">
      
      <div style={{background:"#f7f7f7",width:"360px"}} className="main">
      <h1>To-Do List <i class="fa fa-plus"></i></h1>
        <AddTodo todos={todos} setTodos={setTodos} remtask={remtask} setRemtask={setRemtask} />
        <Todos todos={todos} deleteTodo={deleteTodo} complete={complete} uncomplete={uncomplete} setTodos={setTodos} setCompleteTodos={setCompleteTodos}/>

      </div>
      <div  style={{width:"40px", opacity:"0"}} className="temp"></div>
      {remtask && <>
        <div style={{background:"#f7f7f7",width:"200px"}} className="completed-task">
        <CompleteTodo completeTodos={completeTodos}/>
        </div>
      </>}
      
    </div>
  );
}

export default App;
