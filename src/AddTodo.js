import {useState} from 'react';
const AddTodo = ({todos,setTodos,remtask,setRemtask})=>{
    const addTodo = (content) => {
        const id = todos.length+1;
        let newTodos = [...todos,{id:id,content:content}]
        setTodos(newTodos);
        setContent('')
    }
    const [content,setContent]=useState('')
    return (
        <div className="add">
            <input type="text" placeholder="Add New Todo" value={content} onChange={(e)=>setContent(e.target.value)} />
            <button onClick={()=>addTodo(content)}>Submit</button>
            <button onClick={()=>setRemtask(!remtask)}>Remove Completed Task</button>
        </div>
    )
}

export default AddTodo;