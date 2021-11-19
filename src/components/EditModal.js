import React from 'react'
import { useState } from 'react';
import ModalBackdrop from './ModalBackdrop';

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
                    <select name='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value='0'>None</option>
                        <option value='1'>Low</option>
                        <option value='2'>Medium</option>
                        <option value='3'>High</option>
                    </select>
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
