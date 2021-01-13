import React from 'react';
import { Button, Col, notification } from 'antd';

const ButtonComponent = (props: any) => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Col span={2}>
        <span>Buttons:</span>
      </Col>
      <Col span={4}>
        <Button type='primary' onClick={openNotification}>
          Primary Button
        </Button>
      </Col>
      <Col span={4}>
        <Button>Default Button</Button>
      </Col>
      <Col span={4}>
        <Button type='dashed'>Dashed Button</Button>
      </Col>
      <Col span={4}>
        <Button type='text'>Text Button</Button>
      </Col>
      <Col span={4}>
        <Button type='link'>Link Button</Button>
      </Col>
      <Col span={2}></Col>
    </>
  );
};

export default ButtonComponent;
