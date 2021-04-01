import React, { useState, useRef } from 'react';
import { Button, Input, Divider, message, Card, Row, Col, Steps, Form, Checkbox, Select  } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { connect, Link } from 'umi';


const Step3 = () => {

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

return(
<>
<Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Hospital name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Hospital name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="License No."
        name="license"
        rules={[
          {
            required: true,
            message: 'Please input Hospital name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact"
        name="contact"
        rules={[
          {
            required: true,
            message: 'Please input your Contact!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Select>
        <Option>Department</Option>
        <Option>Department</Option>
        <Option>Department</Option>
        <Option>Department</Option>
      </Select>

      <Select>
        <Option>Designation</Option>
        <Option>Designation</Option>
        <Option>Designation</Option>
        <Option>Designation</Option>
      </Select>
    </Form>
</>
);

}


export default Step3;