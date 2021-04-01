import React, { useState, useRef } from 'react';
import { Button, Input, Divider, message, Card, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { connect, Link } from 'umi';

const Index = () => {

  const actionRef = useRef();
  
  function cancel() {
    message.error('Cancel');
  }
  
  return (
    <PageHeaderWrapper title="Hospital" extra={[
        <Link to="/home/add">
        <Button>Add Hospital</Button>    
        </Link>
    ]}>
      <IntlProvider value={enUSIntl}>
        <Card>
          <Row>
            <Col xs={11} sm={11} md={11} lg={11}>
              <h3>Left Coulmn Data</h3>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}>
              <Divider type="vertical"/>
            </Col>
            <Col xs={11} sm={11} md={11} lg={11}>
            <h3>Right Coulmn Data</h3>
            </Col>
          </Row>
        </Card>
      </IntlProvider>
    </PageHeaderWrapper>
  );
};

export default Index;
