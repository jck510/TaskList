import Task from './Task'
import { useState } from 'react';
import FilterTab from './FilterTab'

const Tasks = ({ tasks, onDelete, onToggle, onEdit,  }) => {

    const [tasksList, setTasksList] = useState(tasks);
    const [currentSelectedFilter, setCurrentSelectedFilter] = useState('');

    const processFilterChange = (newFilter) => {
        
        setCurrentSelectedFilter(newFilter);
        if(newFilter === 'flag'){
            setTasksList(tasks.filter((task) => task.priority > 0));
        }
        else if(newFilter === 'calendar'){
            setTasksList(tasks.filter((task) => task.day !== ''));
        }
        else{
            setTasksList(tasks.filter((task) => task.tag === newFilter));
        }
        
        
        
    }

    
    return (
        <>
            <div className='filter-tabs-div'>
                <FilterTab tabType='flag' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='calendar' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='medical' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='school' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='travel' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='shopping' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='social' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='food' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='drinks' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
                <FilterTab tabType='sports' currentSelectedFilter={currentSelectedFilter} processFilterChange={processFilterChange}/>
            </div>
            
            {currentSelectedFilter === '' ? tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
            ))
            :
            tasksList.map((task) => (
                <Task key={task.id} task={task} 
                onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
            ))
            }
        </>
    )
}

export default Tasks
