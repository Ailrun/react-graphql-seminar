import React, { Component } from 'react';

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

class MyApp extends Component {
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
export default MyApp;
