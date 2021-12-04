import PropTypes from 'prop-types'
import Button from './Button'
import FilterTab from './FilterTab'


const Header = ({ title, onAdd, showAdd, isInEditingState }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} isInEditingState={isInEditingState} />
            
        </header>   
    )
}

Header.defaultProps = {
    title: 'Task List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
const headingStyle = {
    color:'red',
    backgroundColor:'black'
}
*/

export default Header
