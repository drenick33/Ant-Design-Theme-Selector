import React, { useState, useEffect } from 'react';
import { Drawer, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Option } = Select;

const NavDrawer = (props: any) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <MenuOutlined onClick={showDrawer}></MenuOutlined>
      <Drawer
        title='title'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Side Panel</p>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
