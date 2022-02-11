const RemoveCompletedTask=({setRemtask,setTodos,todos,completed,setFinal})=>{
    const move = ()=>{
        let temp = todos.filter((todo)=>{return !todo.isCompleted});
        setTodos(temp);
        setFinal(completed)
    }
    return (
      
    <div className="remove-completed-task">
        {completed.length>0 && <button onClick={()=>{
            setRemtask(true)
            move();
        }}>Remove Completed Task</button>} 
    </div>
    
    )
}

export default RemoveCompletedTask;