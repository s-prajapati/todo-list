import {useState} from 'react';
const AddTodo = ({todos,setTodos,remtask,setRemtask})=>{
    const [lengthError, setLengthError] = useState("");
    const handleKeyPress = (event) => {
        if(event.key === 'Enter' || event.key === 'NumpadEnter'){
          if(content.length >= 5){
            addTodo(content);
          }else{
            setLengthError('Todo task length must be greater than or equal to 5');
          }
        }
    }
    const addTodo = (content) => {
        if(content.length>=5){
            const id = todos.length+1;
            let newTodos = [...todos,{id:id,content:content,isCompleted:false}]
            setTodos(newTodos);
            setContent('')
        }else{
            setLengthError('Todo task length must be greater than or equal to 5');
        }
        
    }
    const [content,setContent]=useState('');
    const move = ()=>{
        let temp = todos.filter((todo)=>{return !todo.isCompleted});
        setTodos(temp);
        
    }
    return (
        <div className="add">
        <input type="text" placeholder="Add New Todo" value={content} onChange={(e)=>{
            if(e.target.value.length>=5){
                console.log(e.target.value)
                setLengthError('')}
                setContent(e.target.value)}
                } onKeyPress={handleKeyPress} />
            {lengthError.length > 0 && (
            <span style={{color: "red",fontSize: "12px",marginLeft: "10px",}}>
              {lengthError}
            </span>
            )}
            <button onClick={()=>addTodo(content)}>Submit</button>
            <button onClick={()=>{
                setRemtask(!remtask)
                move();
            }}>Remove Completed Task</button>
        </div>
    )
}

export default AddTodo;