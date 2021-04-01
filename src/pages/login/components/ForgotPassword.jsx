import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  history } from 'umi';
import { message, Form, Input, Button, Card, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from '../style.less';
import { forgotPassword } from '../service';

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [loginType, setLoginType] = useState('company');

  const onFinish = async (values) => {
    console.log(values);
    values.type = loginType;
    await forgotPassword(values.email,values.type).then((res) => {
      try {
        if (res.success) {
          message.success('Reset link has been sent to your email id. Please check your mail.',2)
          // history.push('/dashboard');
        }
      } catch (e) {
        message.error('Account not found.');
      }
    })
    .catch((e) => {
      const resolveE = Promise.resolve(e);
      resolveE
        .then((res) => {
          message.error(res.message);
        })
        .catch((e) => message.error('Please try again'));
    });
  };
  
  const radioChange = (e) => {
    setLoginType(e.target.value);
  };

  return (
    <div className={styles.main}>
      <Card style={{ marginTop: '10px' }}>
        <Form
          form={form}
          name="normal_login"
          className={styles.forgotPassForm}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <h3 className={styles.forgotPasswordText}>Forgot password</h3>
          </Form.Item>
          <Form.Item name="type">
            <Radio.Group
              onChange={(e) => {
                radioChange(e);
              }}
              defaultValue={loginType}
            >
              <Radio value={'company'}>Company</Radio>

              <Radio value={'admin'}>Admin</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Enter your email"
            />
          </Form.Item>

          <Form.Item>
            <Link
              style={{
                float: 'right',
              }}
              to="login"
            >
              Login
            </Link>
            <Button type="primary" htmlType="submit" className={styles.forgotSubmitButton}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
