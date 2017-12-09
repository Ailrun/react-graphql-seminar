import React, { Component } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

import logo from './logo.svg';

import Posts from './Posts';

const Header = Layout.Header;
const Content = Layout.Content;
const MenuItem = Menu.Item;
const BreadItem = Breadcrumb.Item;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'Main'
    };

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(obj) {
    this.setState({
      page: obj.key
    });
  }

  render() {
    const content =
      this.state.page === 'Posts' ?
      <Posts /> :
      `현재 Page 는 ${this.state.page} 입니다.`;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ paddingLeft: '0', height: '48px' }}>
          <img src={logo} style={{ float: 'left', height: '48px' }} />
          <Menu
            theme='dark'
            selectedKeys={[this.state.page]}
            mode='horizontal'
            onClick={this.handleMenuItemClick}
            style={{ lineHeight: '48px' }}
          >
            <MenuItem key='Main'>Main</MenuItem>
            <MenuItem key='Posts'>Posts</MenuItem>
          </Menu>
        </Header>
        <Layout>
          <Breadcrumb style={{ margin: '0 10px', marginTop: '16px' }}>
            <BreadItem>{this.state.page}</BreadItem>
          </Breadcrumb>
          <Content style={{ margin: '16px', padding: '16px', background: 'white' }}>
            {content}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;
