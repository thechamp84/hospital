import React, { useState } from 'react';
import { Row, Col, Card, Divider, Tag, Avatar } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import UserInfo from './UserInfo';
import { history } from 'umi';
import { ReactComponent as Close } from '../assets/Close.svg';
import style from '../style.less';

const ViewUser = ({}) => {
  const [globalObject, updateGlobalObject] = useState({});
  return (
    <>
      <PageHeaderWrapper>
        <Card>
          <Row gutter={[24, 24]}>
            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Avatar
                    size={150}
                    shape="square"
                    src={
                      'https://bawsala-images.s3.amazonaws.com/company-profile/5fd314fb7d8ff14e01d2166f.png'
                    }
                  />
                </Col>
                <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{ paddingTop: '10px' }}>
                  <Row>
                    <p className={style.p_styling}>User Name: Shreyas1995</p>
                  </Row>
                  <Row style={{ paddingTop: '15px' }}>
                    <p className={style.p_styling}>Email Id: shreyas@fb.com</p>
                  </Row>
                  <Row style={{ paddingTop: '15px' }}>
                    <p className={style.p_styling}>Contact No: 1234567890</p>
                  </Row>
                </Col>
                <Col xs={9} sm={9} md={9} lg={9} xl={9} style={{ paddingTop: '10px' }}>
                  <Row>
                    <span className={style.p_styling}>Status: &nbsp;&nbsp;&nbsp;</span>{' '}
                    <Tag size={'large'} color={'#52C41A'}>
                      Active
                    </Tag>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ textAlign: 'end' }}>
              <Close
                onClick={() => {
                  history.push({ pathname: '/users' });
                }}
              />
            </Col>
          </Row>
          <Divider />
          <UserInfo />
        </Card>
      </PageHeaderWrapper>
    </>
  );
};

export default ViewUser;
