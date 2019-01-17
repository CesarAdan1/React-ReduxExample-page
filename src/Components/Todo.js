import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Todo = ({ onClick, completed, text }) => (
  <li className="listStyle"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo