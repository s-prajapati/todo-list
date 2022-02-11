const CompleteTodo =({final})=>{
    const todoList = final.length ? (
        final.map(todo => {
          return (
            
                <div className="collection-item" key={todo.id}>
                {/* <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> */}
                    <span className="item"><span className="trash"></span>{todo.content}</span>
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

export default CompleteTodo;