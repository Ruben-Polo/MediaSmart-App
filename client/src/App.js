import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Members from './components/Members';
import Member from './components/Member';
import Api from './components/MembersApi';
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      member: []
    };
    this.api = new Api();
  }


  oneMember = person => {
    this.setState({
      ...this.state,
      member: person
    });
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <NavBar></NavBar>
        </div>

        <Switch>
          <Route
            exact path="/" render={() => (
              <Members
                oneMember={member => this.oneMember(member)}
              />
            )}
          />

          <Route
            exact path="/member"
            render={() => <Member member={this.state.member} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
