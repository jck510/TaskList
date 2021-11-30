import React from 'react'
import { useState } from 'react';
import ModalBackdrop from './ModalBackdrop';
import { FaFlag, FaBan } from 'react-icons/fa';

const EditModal = ({ currentEditTask, processEdit, cancelEdit }) => {

    const [id, setID] = useState(currentEditTask.id);
    const [text, setText] = useState(currentEditTask.text);
    const [day, setDay] = useState(currentEditTask.day);
    const [reminder, setReminder] = useState(currentEditTask.reminder);
    const [priority, setPriority] = useState(currentEditTask.priority);


    const onSubmit = (e) =>{
        e.preventDefault();
        const updatedTask = {
            id,
            text,
            day,
            reminder,
            priority
        }
        processEdit(updatedTask);
        
    }


    return (
        <>
        <ModalBackdrop cancelEdit={cancelEdit}/>
        <div className='edit-modal'>
            <h1>Edit Task</h1>
            <form className='edit-form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-control'>
                    <label>Task</label>
                    <input 
                        type='text'
                        name='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                <label>Date & Time</label>
                <input 
                    type='datetime-local'
                    name='day'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />

                </div>

                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input
                        type='checkbox'
                        name='reminder'
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(!reminder)}
                    />

                </div>

                <div className='form-control form-control-select'>
                    <label>Priority</label>

                    <FaBan className='form-control-select-flag' color='grey' cursor='pointer' onClick={() => setPriority('0')}/>

                    {priority === '1' ? <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag'/>}
                    

                    {priority === '2' ? <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag'/>}
                    
                    
                    {priority === '3' ? <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag'/>}
                    


                    {/* <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag'/>
                    <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag'/>
                    <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag' /> */}
            
                </div>

                <input 
                    type='submit'
                    value='Save Task'
                    className='btn btn-block'
                    onSubmit={(e) => onSubmit(e)}
                />

            </form>
            
        </div>
        </>
    )
}

export default EditModal;
