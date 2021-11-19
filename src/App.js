import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import EditModal from './components/EditModal';




function App() {


  const [tasks,setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)
  const [currentEditTask, setCurrentEditTask] = useState(null);
  const [isInEditingState, setIsInEditingState] = useState(false);

  useEffect(() => {
    const tasksList = JSON.parse(localStorage.getItem('tasksArray')) || [];
    setTasks(tasksList)
  },[])
  
 



// Add Task
const addTask = (task) => {

  console.log(task);

  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }

  const oldTasks = JSON.parse(localStorage.getItem('tasksArray')) || [];

  oldTasks.push(newTask);

  localStorage.setItem('tasksArray', JSON.stringify(oldTasks));

  setTasks(oldTasks);

}

// Delete Task
const deleteTask = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  

  localStorage.setItem('tasksArray', JSON.stringify(updatedTasks));

  setTasks(updatedTasks);

}

// Edit Task
const editTask = (task) => {

  setCurrentEditTask(task);
  setIsInEditingState(true);
  
}

//processing an edited task to update the task
const processEdit = (task) => {

  setTasks(tasks.map(listTask => {
    if(task.id === listTask.id){
      const {text,day,reminder,priority} = task; //object destructuring 
      listTask.text = text;
      listTask.day = day;
      listTask.reminder = reminder;
      listTask.priority = priority;
    }
    return listTask;
  }))

  setIsInEditingState(false);
  setCurrentEditTask(null);

  localStorage.setItem('tasksArray',JSON.stringify(tasks));
}

const cancelEdit = () => {
  setIsInEditingState(false);
  setCurrentEditTask(null);
}

// Toggle Reminder
const toggleReminder = (id) => {
  
  localStorage.setItem('tasksArray', JSON.stringify(tasks.map((task) => task.id === id 
  ?
  {...task, reminder: !task.reminder }
  : task)));

  setTasks(JSON.parse(localStorage.getItem('tasksArray')));

}

// && in the showAddTask line is short for a ternary with no else
  return (
    <>
      {isInEditingState && <EditModal currentEditTask = {currentEditTask} processEdit={processEdit} cancelEdit={cancelEdit}/>}
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} isInEditingState={isInEditingState}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        { tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={editTask}/>
        : (
          'No Tasks to Show'
        )}
      </div>
    </>
  );
}

export default App;
