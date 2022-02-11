const RemoveCompletedTask=({setRemtask,setTodos,todos,completed,setFinal,setCompleted})=>{
    const move = ()=>{
        let temp = todos.filter((todo)=>{return !todo.isCompleted});
        setTodos(temp);
        setFinal(completed)
        setCompleted([])
    }
    
    if(completed.length>0 && todos.length) return (
      
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