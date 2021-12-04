import Task from './Task'
import { useState } from 'react';
import FilterTab from './FilterTab'

const Tasks = ({ tasks, onDelete, onToggle, onEdit,  }) => {

    const [tasksList, setTasksList] = useState(tasks);
    const [currentSelectedFilter, setCurrentSelectedFilter] = useState('');

    const processFilterChange = (newFilter) => {
        setCurrentSelectedFilter(newFilter);
    }
    
    return (
        <>
            <div className='filter-tabs-div'>
                <FilterTab tabType='flag' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='calendar' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='medical' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='school' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='travel' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='shopping' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='social' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='food' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='drinks' currentSelectedFilter={currentSelectedFilter}/>
                <FilterTab tabType='sports' currentSelectedFilter={currentSelectedFilter}/>
            </div>
            
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
            ))}
        </>
    )
}

export default Tasks
