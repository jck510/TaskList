import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
    
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Tasks
