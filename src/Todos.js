
const Todos = ({todos, deleteTodo,complete,uncomplete,setTodos}) => {
  const fun=(id)=>{
    const ele=document.getElementById(id);
    ele.classList.toggle("completed");
    
    // console.log(e);
    // e.target.classList.toggle("completed");

  }
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" onClick={()=>{
            fun(todo.id)
            if(!todo.isCompleted){
              let temp= todos;
              temp[todo.id-1].isCompleted=true;
              setTodos(temp);
            }
            else{
              let temp= todos;
              temp[todo.id-1].isCompleted=false;
              setTodos(temp)
            }
          }
          } id={todo.id} key={todo.id}>
          {/* <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> */}
          
            <span  className="item" ><span  onClick={()=>deleteTodo(todo.id)} className="trash"><img style={{width:"20px",height:"20px"}} src="/delete.png" alt="" /></span>{todo.content}</span>
          
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
    
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;