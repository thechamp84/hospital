import { Form, Button, Input, Card, Checkbox, Divider, message } from 'antd';
import React from 'react';
import { connect, history } from 'umi';
import styles from './style.less';
import CountryPhoneCode from '@/lib/antd-country-phone-input';
import { userRegister } from './service';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Register = ({ submitting, dispatch, userAndregister }) => {
  const [form] = Form.useForm();
  const options = [
    { label: "API's Service", value: 'api' },
    { label: 'Delivery Management System', value: 'delivery' },
  ];
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const onFinish = (values) => {
    const services = [];
    if (values.api) {
      services.push('api');
    }
    if (values.delivery) {
      services.push('delivery');
    }
    const data = {
      company_name: values.company_name,
      email: values.mail,
      contact_no: values.mobile.phone,
      country_code: '+' + values.mobile.code,
      serviceRequested: values.services,
    };

    userRegister(data).then((response) => {
      if (response.success) {
        message.success('Registration Successfull');
        history.push({ pathname: '/user/login' });
      } else {
        message.error('Something went wrong! Please try later.');
      }
    });
  };

  const onMobileChange = (rule, value, callback) => {
    try {
      if (!/^\d{8,15}$/.test(value.phone)) {
        throw new Error('The contact number is in the wrong format!');
      }
      callback(); // < -- this
    } catch (err) {
      callback(err);
    }
  };

  return (
    <div className={styles.main}>
      <Card style={{ marginTop: '10px' }}>
        <Form form={form} name="UserRegister" onFinish={onFinish}>
          <h2 className={styles.highlightText}>
            Company details
            {/* <FormattedMessage id="userandregister.register.register" /> */}
          </h2>
          <Divider />
          <p className={styles.labelText}>Company Name</p>

          <FormItem
            name="company_name"
            rules={[
              {
                required: true,
                message: 'Please enter company name',
              },
            ]}
          >
            <Input size="large" placeholder="Enter company name" />
          </FormItem>
          <p className={styles.labelText}>Email</p>

          <FormItem
            name="mail"
            rules={[
              {
                required: true,
                message: 'Please enter email',
              },
              {
                type: 'email',
                message: 'The email address is in the wrong format!',
              },
            ]}
          >
            <Input size="large" placeholder="Enter email" />
          </FormItem>
          <InputGroup compact>
            <p className={styles.labelText}>Contact number</p>

            <FormItem
              style={{
                width: '100%',
              }}
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please enter contact number',
                },
                { validator: onMobileChange },
              ]}
            >
              <CountryPhoneCode />
            </FormItem>
          </InputGroup>
          <p className={styles.labelText}>Services</p>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please select atleast one service.',
              },
            ]}
            name="services"
          >
            <Checkbox.Group options={options} defaultValue={['api']} onChange={onChange} />
          </Form.Item>
          <FormItem>
            <Button
              size="medium"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  );
};

export default connect(({ userAndregister, loading }) => ({
  userAndregister,
  submitting: loading.effects['userAndregister/submit'],
}))(Register);
