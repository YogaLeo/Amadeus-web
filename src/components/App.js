import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';
import { TOKEN_KEY } from '../constants';

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY))
    }

    handleSuccessfulLogin = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({ isLoggedIn: true });
    }

  render() {
    return (
      <div className="App">
        <TopBar/>
        <Main handleSuccessfulLogin = {this.handleSuccessfulLogin} isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default App;
