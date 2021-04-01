import React from 'react';
import { Form, Input, Button, Card, Row, Divider, Col, message } from 'antd';
import { history } from 'umi';
import { acceptAdminInvitation } from '../service';
import styles from '../style.less';


const acceptInvitationAdmin = (props) => {
  const { match } = props;
  const { params } = match;

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const data = {
      email: values.email,
      joinId: params.joinId,
      password: values.password,
    };
    const result = await acceptAdminInvitation(data)
      .then((res) => {
        if (res.success) {
          message.success('Password reset successfull');
          form.resetFields();
          history.push('/user/login');
        } else {
          message.error('Please try later');
        }
      })
      .catch((e) => {
        message.error('Please try later');
      });
  };

  return (
    <div>
      <Row justify="center">
        <Card className={styles.inviteCard}>
          <Col>
            <div>
              <p className={styles.cardTitle}>Set Password</p>
              <Divider style={{ margin: '15px 0' }} />
            </div>

            <div>
              <Form
                form={form}
                name="InviteForm"
                onFinish={onFinish}
                initialValues={{ prefix: '+91' }}
              >
                <div>
                  <p className={styles.formLabel}>Email</p>
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
                </div>
                <div>
                  <p className={styles.formLabel}>Password</p>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder="Enter password" />
                  </Form.Item>
                </div>

                <div>
                  <p className={styles.formLabel}>Confirm Password</p>
                  <Form.Item
                    name="confirm"
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
                    <Input.Password placeholder="Confirm password" />
                  </Form.Item>
                </div>

                <div>
                  <Button type="primary" htmlType="submit">
                    Confirm
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Card>
      </Row>
    </div>
  );
};

export default acceptInvitationAdmin;
