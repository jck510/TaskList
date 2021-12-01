import { useState } from 'react';
import { FaFlag, FaBan, FaClinicMedical, FaShoppingCart , FaCommentDots, FaGlassCheers, FaHamburger, FaGraduationCap, FaFutbol, FaPlane } from 'react-icons/fa'

const AddTask = ({ onAdd }) => {
  // Hold the task state
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [priority, setPriority] = useState('');
  const [tag, setTag] = useState('');

  const handleEditTask = (e) => {


    
}

  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      alert('Please enter in a Task');
    }
    else{
      if(priority === ''){ //will automatically set the priority to no priority if user did not select an option
        setPriority('0');
      }
      const task = {
        text,
        day,
        reminder,
        priority,
        tag
      };
      
      onAdd(task);
      setText('');
      setDay('');
      setReminder(false);
      setPriority('');
      setTag('');
    }
    
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
      <div className='form-control form-control-select'>
        <label>Priority</label>
        
        
        <FaBan className='form-control-select-flag' color='grey' cursor='pointer' onClick={() => setPriority('0')}/>

        {priority === '1' ? <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag'/>}
        {/* <FaFlag color='blue' onClick={() => setPriority('1')} cursor='pointer' className='form-control-select-flag'/> */}

        {priority === '2' ? <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag'/>}
        {/* <FaFlag color='orange' onClick={() => setPriority('2')} cursor='pointer' className='form-control-select-flag'/> */}
        
        {priority === '3' ? <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag-selected'/> : <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag'/>}
        {/* <FaFlag color='red' onClick={() => setPriority('3')} cursor='pointer' className='form-control-select-flag' /> */}

        

      </div>

      <div className='form-control form-control-select'>

        <label>Tags</label>

        <FaBan className='form-control-select-tag' color='grey' size='22px' cursor='pointer' onClick={() => setTag('')}/>
        {tag === 'medical' ? 
        <FaClinicMedical className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('medical')}/> 
        : 
        <FaClinicMedical className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('medical')}/>
        }
        {tag === 'school' ? 
        <FaGraduationCap className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('school')}/> 
        : 
        <FaGraduationCap className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('school')}/>
        }
        {tag === 'travel' ? 
        <FaPlane className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('travel')}/> 
        : 
        <FaPlane className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('travel')}/>
        }
        {tag === 'shopping' ? 
        <FaShoppingCart className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('shopping')}/> 
        : 
        <FaShoppingCart className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('shopping')}/>
        }
        {tag === 'social' ? 
        <FaCommentDots className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('social')}/> 
        : 
        <FaCommentDots className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('social')}/>
        }
        {tag === 'food' ? 
        <FaHamburger className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('food')}/> 
        : 
        <FaHamburger className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('food')}/>
        }
        {tag === 'drinks' ? 
        <FaGlassCheers className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('drinks')}/> 
        : 
        <FaGlassCheers className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('drinks')}/>
        }
        {tag === 'sports' ? 
        <FaFutbol className='form-control-select-tag-selected' size='30px' cursor='pointer' onClick={() => setTag('sports')}/> 
        : 
        <FaFutbol className='form-control-select-tag' size='30px' cursor='pointer' onClick={() => setTag('sports')}/>
        }
        



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