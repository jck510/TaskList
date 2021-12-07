import { FaTimes, FaPen, FaFlag, FaClinicMedical, FaShoppingCart, FaCommentDots, FaGlassCheers, FaHamburger, FaGraduationCap, FaFutbol, FaPlane } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onEdit }) => {

    var tempString = '';
    var timeString = '';
    var month = '';
    //console.log(task.day);
    if(task.day){
        tempString = JSON.stringify(task.day);
        switch(parseInt(tempString[6] + tempString[7])){
            case 1:
                month = 'January';
                break;
            case 2:
                month = 'February';
                break;
            case 3:
                month = 'March';
                break;
            case 4:
                month = 'April';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'August';
                break;
            case 9:
                month = 'September';
                break;
            case 10:
                month = 'October';
                break;
            case 11:
                month = 'November';
                break;
            case 12:
                month = 'December';
                break;
            default:
                
        }

        var suffix = '';

        
        switch(parseInt(tempString[10])){
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default: //the case when it is a 0,4,5,6,7,8, or 9
                suffix = 'th';
                break;

            
        }

        // this double checks to see if the date is in the 10's place since all end in th
        switch(parseInt(tempString[9])){
            case 1:
                suffix = 'th';
                break;
            default:
                break;
        }

        var amOrPm = '';
        var hour = parseInt(tempString[12] + tempString[13]);
        var minute = tempString[15] + tempString[16];
        var year = tempString[1] + tempString[2] + tempString[3] + tempString[4];
        if((hour / 12) > 1){
            hour = hour % 12; //will mod 12
            amOrPm = 'PM';
        }
        else{
            amOrPm = 'AM';
        }

        timeString = month + ' ' + tempString[9] + tempString[10] + suffix + ', ' + year + ', @' + hour + ':' + minute + amOrPm;
    }
    else{
        timeString = 'No Time Selected'
    }

    // priority feature that will give the current task (no flag = no priority, blue flag = low, orange = medium, red = high )
    let hasPriority = false;
    let flagStyle;
    
    if(task.priority === '1'){
        hasPriority = true;
        flagStyle = {color: 'blue'};
    }
    else if(task.priority === '2'){
        hasPriority = true;
        flagStyle = {color: 'orange'};
    }
    else if(task.priority === '3'){
        hasPriority = true;
        flagStyle = {color: 'red'};
    }
    
    
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            
            
            <h3>{task.text}
                
                <div>
                    <FaPen style={{ color: 'green', cursor: 'pointer'}} className='icon-div' onClick={() => onEdit(task)} />
                    <FaTimes style={{ color: 'red', cursor: 'pointer', marginLeft:'12px'}} 
                    onClick={() => onDelete(task.id)} className = 'icon-div' />
                </div>
            </h3>
            <p>
                {timeString}
                {hasPriority && <FaFlag style={flagStyle} className='task-priority-flag'/>}
            </p>

            {task.tag === 'medical' && <FaClinicMedical size='25px' className='task-tag'/>}
            {task.tag === 'school' && <FaGraduationCap size='25px' className='task-tag'/>}
            {task.tag === 'travel' && <FaPlane size='25px' className='task-tag'/>}
            {task.tag === 'shopping' && <FaShoppingCart size='25px' className='task-tag'/>}
            {task.tag === 'social' && <FaCommentDots size='25px' className='task-tag'/>}
            {task.tag === 'food' && <FaHamburger size='25px' className='task-tag'/>}
            {task.tag === 'drinks' && <FaGlassCheers size='25px' className='task-tag'/>}
            {task.tag === 'sports' && <FaFutbol size='25px' className='task-tag'/>}

            
            
        </div>
    )
}

export default Task
