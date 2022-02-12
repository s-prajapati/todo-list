;const Todos = ({todos, deleteTodo,completed,setCompleted,uncomplete,setTodos}) => {
  
  // const strikeText=(id)=>{
  //   const ele=document.getElementById(id);
  //   ele.classList.toggle("completed");

  // }
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className={todo.isCompleted ? "completed":"collection-item"} onClick={()=>{
            // strikeText(todo.id)
            if(!todo.isCompleted){
              let temp= todos;
              temp.forEach(t=>{
                if(t.id===todo.id){
                  t.isCompleted=true;
                }

              })
              let newComp = [...completed,todo]
              setTodos(temp);
              localStorage.setItem('todos',JSON.stringify(temp))
              setCompleted(newComp)
              
              
            }
            else{
              let temp= todos;
              temp.forEach(t=>{
                if(t.id===todo.id){
                  t.isCompleted=false;
                }
              })
              let newComp = completed.filter(task=>{return task!==todo})
              setTodos(temp);
              localStorage.setItem('todos',JSON.stringify(temp))
              setCompleted(newComp);
            }
          }
          } id={todo.id} key={todo.id}>
          {/* <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> */}
          
            <span  className="item" >{todo.content}</span>
          
        </div>
      )
    })
  ) : (
    <p style={{marginLeft:"80px"}}>You have no todo's left, yay!</p>
    
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;