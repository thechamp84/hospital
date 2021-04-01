import React, { useState, useRef } from 'react';
import { Button, Input, Divider, message, Card, Row, Col, Form, Select } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { connect, Link } from 'umi';
import styles from './style.less';
import { number } from 'prop-types';

const { Option } = Select;

const Index = ({ currentUser }) => {

  const actionRef = useRef();
  
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  
  
  return (
    <PageHeaderWrapper title="Staff">
      <IntlProvider value={enUSIntl}>
      <div >
      <Card style={{ marginTop: '10px' }} >
        <Form
          //form={form}
          name="staff"
          //className={styles.forgotPassForm}
          //onFinish={onFinish}
        >

        <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                type: 'name',
                message: 'Please input your name',
              },
            ]}
          >
            <Input
              placeholder="Enter your name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your email',
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            label="License No."
            name="license no."
            rules={[
              {
                required: true,
                message: 'Please input your license no.',
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your license no."
            />
          </Form.Item>

          <Form.Item
        label="Contact"
        name="contact"
        rules={[
          {
            required: true,
            type: 'number',
            message: 'Please input your Contact!',
          },
        ]}
      >
        <Input 
            placeholder="Enter your Contact"
        />
      </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: 'Please select your department',
              },
            ]}
          >
              <Select 
              placeholder="Enter your Department"
              >
                  <Option>Department1</Option>
                  <Option>Department2</Option>
                  <Option>Department3</Option>
              </Select>
            
          </Form.Item>

          <Form.Item
            label="Designation"
            name="designation"
            rules={[
              {
                required: true,
                message: 'Please select your designation',
              },
            ]}
          >
              <Select
              placeholder="Enter your Designation"
              >
                  <Option>Designation1</Option>
                  <Option>Designation2</Option>
                  <Option>Designation3</Option>
              </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.forgotSubmitButton}>
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
      </IntlProvider>
    </PageHeaderWrapper>
  );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Index);
