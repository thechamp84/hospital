import React, { useState, useRef } from 'react';
import { Button, Input, Divider, message, Card, Row, Col, Steps, Form  } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { connect, Link } from 'umi';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const { Step } = Steps;

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


    const steps = [
      {
        title: 'Hospital',
        content: <Step1 />,
      },
      {
        title: 'Departments',
        content: <Step2 />,
      },
      // {
      //   title: 'Last',
      //   content: <Step3 />,
      // },
    ];

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

const FormSteps = ({ currentUser }) => {

    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

 

    return (
        <PageHeaderWrapper title="Form" >
          <IntlProvider value={enUSIntl}>
            <Card>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
          </Card>
          </IntlProvider>
    </PageHeaderWrapper>
      );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(FormSteps);
