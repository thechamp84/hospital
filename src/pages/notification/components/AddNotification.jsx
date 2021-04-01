import React, { useState } from 'react';
import { Form, Button, Input, Row, Col, Card, Divider, Select, Radio, DatePicker } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { ReactComponent as Close } from '../assets/Close.svg';
import style from '../style.less';

const { TextArea } = Input;
const { Option } = Select;

const AddNotification = ({}) => {
  const [form] = Form.useForm();
  const updatedFormValue = (value) => updateGlobalObject(Object.assign(globalObject, value));
  const [globalObject, updateGlobalObject] = useState({});
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  
  const onFinish = (values) => {
    console.log(values);
    
  };
  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <span className={style.tableHeading}>Add Notification</span>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: 'end' }}>
              <Close
                onClick={() => {
                  history.push({ pathname: '/notifications' });
                }}
              />
            </Col>
          </Row>
          <Divider />
          <Form
            {...layout}
            form={form}
            name="register"
            onFinish={onFinish}
            onValuesChange={updatedFormValue}
          >
            {/* <Row gutter={[24, 24]}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}> */}
                <Form.Item
                  name="title"
                  label="Notification Title"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter title',
                    },
                  ]}
                >
                  <Input size="middle" placeholder="Enter title" />
                </Form.Item>
              {/* </Col>
            </Row>
            <Row gutter={[24, 24]}>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}> */}
                <Form.Item
                  name="category"
                  label="Notification Body"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter body',
                    },
                  ]}
                >
                  
                  <TextArea placeholder="Enter body" />
                </Form.Item>
              {/* </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}> */}
                <Form.Item
                  name="screen_url"
                  label="Screen/URL"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter screen/URL',
                    },
                  ]}
                >
                  <Input size="middle" placeholder="Enter screen/URL" />
                </Form.Item>
              {/* </Col>
            </Row> */}
            <Button key="submit" type="primary" htmlType="submit">
              Add Notification
            </Button>
          </Form>
        </Card>
      </PageHeaderWrapper>
    </>
  );
};

export default AddNotification;
