import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import {  history } from 'umi';
import { LockOutlined } from '@ant-design/icons';

import styles from '../style.less';
import { resetPassword } from '../service';

const ResetPassword = (props) => {
  const { match } = props;
  const { params } = match;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const data = {
      email: values.email,
      forgetPasswordID: params.forgetPasswordId,
      type: params.type,
      password: values.password,
    };
    const result = await resetPassword(data)
      .then((res) => {
          if (res.success) {
          message.success('Password reset successfull');
          history.push('/user/login');
        }
      })
      .catch((e) => {
        message.error('Please try later');
      });
    // const fieldsValue = await form.validateFields();
    // const value = {
    //   forgetPasswordID: window.location.pathname.split('/')[2],
    //   password: fieldsValue.password,
    // };
    // form.resetFields();
    // await resetPassword(value);
  };

  return (
    <div className={styles.main}>
      <Card style={{ marginTop: '10px' }}>
        <Form
          form={form}
          name="reset_password"
          className={styles.forgotPassForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item>
            <h3 className={styles.forgotPasswordText}>Reset Password</h3>
          </Form.Item>
          <Form.Item
            name="email"
            initialValue={params.email}
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="password"
            // label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            // label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.forgotSubmitButton}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
