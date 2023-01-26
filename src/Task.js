const Task = (props) => {
    return (
        <div className='todoElement'>
            <h2>{props.taskName}</h2>
            <button style={{backgroundColor: props.isit ? "green" : "red"}} onClick={() => props.complete(props.id)}> {props.isit ? "completed": "not completed"} </button>
            <button className='deleteBtn' onClick={() => props.delFunc(props.id)}>X</button>
        
        </div>
    );
    
}

export default Task;