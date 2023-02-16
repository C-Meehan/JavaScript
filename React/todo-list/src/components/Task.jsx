import React, {useState} from 'react';

const Task = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [completed, setCompleted] = useState(false);

    const createTask = (e) => {
        e.preventDefault();

        const newTask = {task, completed};
        setTaskList([...taskList,newTask]);
        setTask("");
        setCompleted(false);
    }

    const finishTask = (element) => {
        // e.preventDefault();

        // setCompleted(true);
        setTaskList(taskList.filter(c => c !== element));
        console.log(taskList);
    }

    const handleComplete = (e) => {
        e.completed = !e.completed;
        setTaskList([...taskList]);
    }

    return (
        <div>
            <form onSubmit={createTask}>
                <label>Add a task </label>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <input className="submit-btn" style={{marginLeft: "10px"}} type="submit" value="Add"/>
            </form>
            {
                taskList.map((element, index) => (
                    // <div key={index} {(element.complete) ? style={{margin: "8px", fontSize: "32px", color: "black", textDecoration: "line-through"}} : style={{margin: "8px", fontSize: "32px", color: "black"}}>{element.task}<button onClick={e => finishTask(element)}>Complete</button></div>
                    <div key={index} style={{margin: "8px", fontSize: "32px", color: "black",textDecoration: element.completed && "line-through"}}>{element.task}<input type="checkbox" checked={element.completed} onClick={e => handleComplete(element)}/>
                    <button onClick={e => finishTask(element)}>Complete</button></div>
                    ))
                }
            {/* <div>{
                taskList.map((element, index) => (
                    <div key={index} style={{margin: "8px", color: "grey"}}>{element.task}</div>
                ))
                }
            </div> */}
        </div>
    )
}

export default Task