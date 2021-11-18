import PropTypes from 'prop-types'


const Button = ({color,text, onClick, isInEditingState}) => {

    
    return (
        <button disabled={isInEditingState} onClick={onClick} style={{visibility: isInEditingState ? 'hidden' : 'visible', backgroundColor: color}} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
