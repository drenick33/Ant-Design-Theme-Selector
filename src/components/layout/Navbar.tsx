import React from 'react';
import { Menu, Button, Avatar } from 'antd';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  return (
    <Menu theme='light' mode='horizontal'>
      <Menu.Item key='1'>
        <a href='/'>
          <Avatar>DR</Avatar>
          <span style={{ paddingLeft: '12px' }}>Ant Theme Tester</span>
        </a>
      </Menu.Item>
      <Menu.Item key='3' style={{ float: 'right' }}>
        <NavDrawer></NavDrawer>
      </Menu.Item>
      <Menu.Item key='4' style={{ float: 'right' }}>
        <Button type='primary'>Primary</Button>
      </Menu.Item>
      <Menu.Item key='2' style={{ float: 'right' }}>
        <Button>NavButton</Button>
      </Menu.Item>
      <Menu.Item key='5' style={{ float: 'right' }}>
        <Button type='text'>TextButton</Button>
      </Menu.Item>
      <Menu.Item key='6' style={{ float: 'right' }}>
        <Button type='link'>Link</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
