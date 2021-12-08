import Task from './Task'
import { useState } from 'react';
import FilterTab from './FilterTab'

const Tasks = ({ tasks, onDelete, onToggle, onEdit,  }) => {

    const [tasksList, setTasksList] = useState(tasks);
    const [currentSelectedFilter, setCurrentSelectedFilter] = useState('');

    const processFilterChange = (newFilter) => {
        
        setCurrentSelectedFilter(newFilter);
        if(newFilter === 'flag'){
            const flagFilteredTasks = tasks.filter((task) => task.priority > 0);
            flagFilteredTasks.sort((a,b) => {
                return b.priority - a.priority;
            });
            setTasksList(flagFilteredTasks);
        }
        else if(newFilter === 'calendar'){
            const dateFilteredTasks = tasks.filter((task) => task.day !== '');
            dateFilteredTasks.sort((a,b) => {
                console.log('A',a.day);
                console.log('B',b.day);
                if(a.day > b.day){
                    //console.log('A is greater than B');
                    return 1;
                }
                else if(a.day < b.day){
                    //console.log('B is greater than A');
                    return -1;
                }
                else if(a.day === b.day){
                    //console.log('A is Equal to B');
                    return 0;
                }
                
                
            });
            setTasksList(dateFilteredTasks);
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
