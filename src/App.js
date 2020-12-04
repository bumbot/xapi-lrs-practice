import './App.css';
import Main from './components/Main';
import React, {Component} from 'react';


class App extends Component {
  //define state
  constructor() {
    super();

    this.state = {
      value: "",
      userLogin: "",
      userActivity: "default",
      userAction: "default"
    }
  }

  handleSubmit(event) {
    this.setState({
      userLogin: this.state.value,
      value: ""
    })
    
  }

  handleFormChange(event) {
    this.setState({
      value: event.target.value
    })
    
  }

  login(name) {
    this.setState({
      userLogin: name
    })
  }

  renderLogin() {
    if (this.state.userLogin !== "") {
      return (
        <div>
          <Main userLogin={this.state.userLogin} userActivity={this.state.userActivity} userAction={this.state.userAction}/>
        </div>
      )
    } else {
      return (
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>
              Username:
              <input type='text' value={this.state.value} onChange={(event) => this.handleFormChange(event)}/>
            </label>
              <input type="submit" value="Login"/>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      this.renderLogin()
    );
  }
}

export default App;
