import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'
import './styles.css'


class Redux extends Component {
  render() {
    return (
      <div>
        {/*Redux*/}
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <Link to={'/'}>
          <button className="buttonToHome">
            Return
          </button>
        </Link>
      </div>
    );
  }
}

export default Redux;