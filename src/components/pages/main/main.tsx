import React from 'react';
import { Row, Select } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import ButtonComponent from './button';
import FormComponent from './form';
import CardComponent from './card';
import CollapseComponent from './collapse';
import TableComponent from './table';
import AlertComponent from './alert';

const { Option } = Select;

const Main = (props: any) => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();

  if (status === 'loading') {
    return <div>Loading styles...</div>;
  }

  const selectTheme = (newTheme: string) => {
    switcher({ theme: newTheme });
    localStorage.setItem('curTheme', newTheme);
  };

  return (
    <div className='mainContainer'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 className='center'>Current theme: {currentTheme}</h2>
      </div>
      <Select
        placeholder='Change Theme'
        size='large'
        onSelect={(value: any) => selectTheme(value)}
      >
        <Option value='light'>Light</Option>
        <Option value='dark'>Dark</Option>
        <Option value='dracula'>Dracula</Option>
        <Option value='monokai'>Monokai</Option>
        <Option value='nord'>Nord</Option>
      </Select>
      <Row
        gutter={4}
        justify='center'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonComponent />
      </Row>
      <Row
        gutter={4}
        justify='space-around'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormComponent />
      </Row>
      <Row
        gutter={4}
        justify='space-around'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardComponent />
      </Row>
      <Row
        gutter={4}
        justify='space-around'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CollapseComponent />
      </Row>
      <Row
        gutter={4}
        justify='space-around'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TableComponent />
      </Row>
      <Row
        gutter={4}
        justify='space-around'
        style={{
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AlertComponent />
      </Row>
    </div>
  );
};

export default Main;
