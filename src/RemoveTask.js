const RemoveCompletedTask=({setRemtask,setTodos,todos,completed,setFinal,setCompleted,final})=>{
    const move = ()=>{
        let temp = todos.filter((todo)=>{return !todo.isCompleted});
        setTodos(temp);
        localStorage.setItem('todos',JSON.stringify(temp));

        setFinal([...final,...completed])
        localStorage.setItem('final',JSON.stringify([...final,...completed]));
        
        setCompleted([])
    }
    
    if(todos.filter(todo=>todo.isCompleted).length>0 && todos.length>0 ) return (
      
    <div className="remove-completed-task">
         <button onClick={()=>{
            setRemtask(true)
            move();
        }}>Remove Completed Task</button> 
    </div>
    
    )
    else return (<div></div>)
}

export default RemoveCompletedTask;