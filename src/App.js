import React, { Component } from 'react';

import Posts from './Posts';

const percentage = ((2 + 3) / 100) * 100;

const NavBar = ({ children }) => <nav>{children}</nav>;

const NavButtons = ({ handler }) => [
  <button onClick={handler.bind(null, 'Main')}>Main</button>,
  <button onClick={handler.bind(null, 'Posts')}>Posts</button>,
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
    const { page } = this.state;

    if (page === 'Posts') {
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
        현재 Page 는 {page} 입니다.
        현재 진행률은 {percentage} % 입니다.
      </div>
    );
  }
}
export default App;
