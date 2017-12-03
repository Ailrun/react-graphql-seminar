import React, { Component } from 'react';

import Posts from './Posts';

const percentage = ((2 + 3) / 100) * 100;

const NavBar = props => (
  <nav>
    {props.children}
  </nav>
);
const NavButtons = props => [
  <button onClick={() => props.handler('Main')}>Main</button>,
  <button onClick={() => props.handler('Posts')}>Posts</button>
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'Main'
    };

    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }

  handleNavButtonClick(buttonType) {
    this.setState({
      page: buttonType
    });
  }

  render() {
    if (this.state.page === 'Posts') {
      return (
        <div>
          <NavBar>
            <NavButtons handler={this.handleNavButtonClick} />
          </NavBar>
          <Posts />
        </div>
      );
    }

    return (
      <div>
        <NavBar>
          <NavButtons handler={this.handleNavButtonClick} />
        </NavBar>
        현재 Page 는 {this.state.page} 입니다.
        현재 진행률은 {percentage} % 입니다.
      </div>
    );
  }
}
export default App;
