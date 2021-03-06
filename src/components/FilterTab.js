import React from 'react';
import { useState } from 'react';
import { FaRegFlag,FaRegCalendarAlt,FaClinicMedical, FaShoppingCart, FaCommentDots, FaGlassCheers, FaHamburger, FaGraduationCap, FaFutbol, FaPlane } from 'react-icons/fa';

const FilterTab = ({ tabType, currentSelectedFilter, processFilterChange }) => {

    const [classState, setClassState] = useState('filter-tab');


    const toggleSelectedClass = () => {
        if(classState === 'filter-tab'){
            setClassState('filter-tab-selected');
        }
        else{
            setClassState('filter-tab');
        }
    }



    const toggleOnClick = () => {
        // want to make it so if one filter is selected then another filter cannot be selected at the same time
        
        if(currentSelectedFilter === tabType){ //unselecting filter
            processFilterChange('');
            //setClassState('filter-tab-selected');
        }
        else{ //selecting filter
            processFilterChange(tabType); //sets the current filter as the tab type
            //setClassState('filter-tab');
        }

        
    
    }

    return (
        <div>
            {tabType === 'flag' && 
            <FaRegFlag className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} size='40px' 
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'calendar' && 
            <FaRegCalendarAlt className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'medical' && 
            <FaClinicMedical 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'school' && 
            <FaGraduationCap 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'travel' && 
            <FaPlane 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'shopping' && 
            <FaShoppingCart 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'social' && 
            <FaCommentDots 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'food' && 
            <FaHamburger 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'drinks' && 
            <FaGlassCheers 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
            {tabType === 'sports' && 
            <FaFutbol 
                className={currentSelectedFilter === tabType? 'filter-tab-selected' : classState} 
                size='40px'
                onClick={() => toggleOnClick()} 
                onMouseOver={() => toggleSelectedClass()} 
                onMouseOut={() => toggleSelectedClass()} 
                cursor='pointer'/>
            }
        </div>
    )
}

export default FilterTab
