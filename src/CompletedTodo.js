const CompleteTodo =({final})=>{
    const todoList = final.length ? (
        final.map(todo => {
          return (
            
                <div className="collection-item" key={todo.id}>
                {/* <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span> */}
                    <span className="item">{todo.content}</span>
                </div>
            
          )
        })
      ) : (
        <p className="center"></p>
      );
    
      return (
        <div className="todos collection">
          {todoList}
        </div>
      )
}

export default CompleteTodo;