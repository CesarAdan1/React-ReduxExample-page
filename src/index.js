import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './Reducers'

const store = createStore(rootReducer)

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
