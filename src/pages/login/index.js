import { Button, Form, Input, message, Card, Divider, Row, Col, Radio } from 'antd';
import React, { useState } from 'react';
import { Link, history } from 'umi';
import styles from './style.less';
import { setAuthority } from '../../utils/authority';
import { UserLogin } from './service';

const Login = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    message.loading('Please wait');

    if(values.email == "himanshu@gmail.com" && values.password == "himanshu1234"){

            localStorage.setItem('TOKEN', "vcyucvjvsc564fds4f6sfs");
            localStorage.setItem('login-type', "admin");
            history.push('/home');

    }


    // const data = await UserLogin(values)
    //   .then((res) => {
    //     try {
    //       if (res.success) {
    //         console.log('res', res);
    //         localStorage.setItem('TOKEN', res.payload.token);
    //         localStorage.setItem('login-type', res.payload.accountType);
    //         history.push('/home');
    //       }
    //     } catch (e) {
    //       message.error('Account not found.');
    //     }
    //   })
    //   .catch((e) => {
    //     const resolveE = Promise.resolve(e);
    //     resolveE
    //       .then((res) => {
    //         message.error(res.message);
    //       })
    //       .catch((e) => message.error('Please try again'));
    //   });
  };
  const radioChange = (e) => {
    setLoginType(e.target.value);
  };

  return (
    <div className={styles.main}>
      <Card style={{ marginTop: '10px' }} className={styles.cardBorder}>
        <Form
          form={form}
          name="normal_login"
          className={styles.forgotPassForm}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <p className={styles.loginText}>Login</p>
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
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <Input.Password
              // prefix={<LockTwoTone />}
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item>
            {/* <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={12} xl={12}>
                <Link
                  style={{
                    float: 'left',
                  }}
                  to="/user/register"
                >
                  Signup?
                </Link>
              </Col>
              <Col xs={24} sm={24} md={12} xl={12}>
                <Link
                  style={{
                    float: 'right',
                  }}
                  to="/user/forgotPassword"
                >
                  Forget Password
                </Link>
              </Col>
            </Row> */}

            <Button type="primary" htmlType="submit" className={styles.forgotSubmitButton}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
