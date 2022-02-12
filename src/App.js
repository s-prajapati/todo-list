import Todos from "./Todos";
import {useState ,useEffect} from 'react'
import AddTodo from "./AddTodo";
import CompleteTodo from "./CompletedTodo";
import RemoveCompletedTask from "./RemoveTask";



function App() {
  
  let [todos,setTodos]=useState([]);
  let [completed,setCompleted]=useState([]);
  let [final,setFinal]=useState([]);
  let [remtask,setRemtask]=useState(false);



  useEffect(() => {
    console.log(completed+'\n-------------\n'+final)
  })
  

  return (
    <div className="App">
      
      <div style={{background:"#f7f7f7",width:"360px"}} className="main">

        <h1 className="todo-heading">To-Do List</h1>
        <AddTodo todos={todos} setTodos={setTodos} />
        <RemoveCompletedTask todos={todos} setTodos={setTodos} setRemtask={setRemtask}  setFinal={setFinal} final={final} setCompleted={setCompleted} completed={completed}/>
        <Todos todos={todos}  completed={completed}  setTodos={setTodos} setCompleted={setCompleted}/>

      </div>

      <div  style={{width:"40px", opacity:"0"}} className="temp"></div>

        {remtask && <>
          <div style={{background:"#f7f7f7",width:"360px"}} className="completed-task">
            <h1 className="completed-heading">Completed Tasks</h1>
            <CompleteTodo final={final}/>
          </div>
        </>}
      
    </div>
  );
}

export default App;
