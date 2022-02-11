import {useState} from 'react';
const AddTodo = ({todos,setTodos})=>{
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
            // let id;
            // if(todos.length!=0){
            //      id = todos[todos.length-1].id+1;
            // }
            // else id=1;
            
            let newTodos = [...todos,{id: Math.random(),content:content,isCompleted:false}]
            setTodos(newTodos);
            setContent('')
        }else{
            setLengthError('Todo task length must be greater than or equal to 5');
        }
        
    }
    const [content,setContent]=useState('');
    
    return (
        <div className="add">
        <input type="text" placeholder="Add New Todo" value={content} onChange={(e)=>{
            if(e.target.value.length>=5){
                setLengthError('')}
                setContent(e.target.value)}
                } onKeyPress={handleKeyPress} />
            {lengthError.length > 0 && (
            <span style={{color: "red",fontSize: "12px",marginLeft: "10px",}}>
              {lengthError}
            </span>
            )}
            <button onClick={()=>addTodo(content)}>Submit</button>
            
        </div>
    )
}

export default AddTodo;