import React,{useState} from "react";
import {Button, Form, Input, message, Row, Col, Select} from 'antd';
import style from '../styles.less';
import { updateProfileInformationCompany, updateProfileInformationAdmin } from '../serivce';


const ChangePassword = () => {
  const loginType = localStorage.getItem('login-type');
  const [, setLoading] = useState(false);
  const [form] = Form.useForm();

  const { Option } = Select;

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onFinish = values => {
    delete values.confirmPassword;
    (loginType === 'company'
      ? updateProfileInformationCompany(values)
      : updateProfileInformationAdmin(values))
      .then((res) => {
        if (res.success) {
          message.success(`Password updated successfully`);
          form.resetFields();
        }else{
          console.log('res.message',res)
        }
      })
      .catch((err) => console.log('err', err));
  }

  return (
    <div className={style.profileDetails}>

      <div className={style.headerNav}>
        <p>Change Password</p>
      </div>


      <div className={style.formDiv}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          hideRequiredMark={true}
          form={form}
          // onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              <Form.Item
                label="Current password"
                name="currentPassword"
                rules={[{ required: true, message: 'please enter current password' }]}
              >
                <Input.Password placeholder='please enter current password'/>
              </Form.Item>

              <Form.Item
                label="New password"
                name="password"
                rules={[{ required: true, message: 'please enter new password' }]}
              >
                <Input.Password placeholder='please enter new password'/>
              </Form.Item>

              <Form.Item
                label="Confirm password"
                name="confirmPassword"
                dependencies={['password']}
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
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='please enter confirm password'/>
              </Form.Item>

              <Form.Item>
                <Row justify="center" gutter={[16,0]}>
                  <Button type="primary" htmlType="submit"  style={{ marginRight: 30}} >
                    Generate pwd.
                  </Button>
                </Row>
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </div>

    </div>
  )
}

export default ChangePassword;
