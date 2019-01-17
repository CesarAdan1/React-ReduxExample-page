import React, { Component } from 'react';
import Game from "./Components/Board";
import { Switch, Route} from 'react-router-dom';
import Redux from "./Components/Redux"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/Redux' component={Redux} />
          <Route exact path='/' component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
