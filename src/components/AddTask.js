import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  // Hold the task state
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleEditTask = (e) => {


    
}

  const onSubmit = (e) => {
    e.preventDefault();
    const task = {
      text,
      day,
      reminder,
    };
    
    onAdd(task);
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={(e) => onSubmit(e)}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          name='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='datetime-local'
          name='day'
          placeholder='Add Day & Time'
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

      <input
        type='submit'
        value='Save Task'
        className='btn btn-block'
        onSubmit={(e) => onSubmit(e)}
      />
    </form>
  );
};

export default AddTask;