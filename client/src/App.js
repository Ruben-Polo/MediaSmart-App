import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Members from './components/Members';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Members}></Route>
     </Switch>
    </div>
  );
}

export default App;
