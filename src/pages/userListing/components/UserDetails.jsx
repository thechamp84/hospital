import React from 'react';
import { Row, Col, Avatar, Card, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import style from '../style.less';
import { ReactComponent as Close } from '../assets/Close.svg';
import { history } from 'umi';


const UserDetails = ({details}) =>{

if (details[0] !== undefined) {
    var email = details['0']["email"];
    var name = details['0']["names"];
    var profile = details['0']["profile"];
    var status = details['0']["active"];
    if(status==true){
      var colors ='#52C41A';
      var states ="Active";
    }
    else if (status==false){
      var colors ='#FFD000';
      var states ="Inactive";
    }
    
}
 
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
                    icon={<UserOutlined />}
                    src={profile}
                  />
                </Col>
                <Col xs={11} sm={11} md={11} lg={11} xl={11} style={{ paddingTop: '10px' }}>
                  <Row>
                    <p className={style.p_styling}>Name : {name}</p>
                  </Row>
                  <Row style={{ paddingTop: '15px' }}>
                    <p className={style.p_styling}>Email Id : {email}</p>
                  </Row>
                  <Row style={{ paddingTop: '15px' }}>
                    <p className={style.p_styling}>Status : { <Tag color={colors}>{states}</Tag> }
                    </p>
                  </Row>
                  {/* <Row style={{ paddingTop: '15px' }}>
                    <p className={style.p_styling}>Contact No : {contact}</p>
                  </Row> */}
                </Col>
                <Col xs={9} sm={9} md={9} lg={9} xl={9} style={{ paddingTop: '10px' }}>
                  <Row>
                    {/* <span className={style.p_styling}>Status: &nbsp;&nbsp;&nbsp;</span>{' '}
                    <Tag size={'large'} color={'#52C41A'}>
                      Active
                    </Tag> */}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ textAlign: 'end' }}>
              <Close
                cursor="pointer"
                onClick={() => {
                  history.push({ pathname: '/users/allusers' });
                }}
              />
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    </>
  );

// return (
        
//         <Row>
//             <Col md={8}>
//             <Avatar shape="square" size={64} src="/static/logo.63cd4696.svg"/>
//             </Col>
//             <Col md={16}>
//                 <table style={{ padding: '15px' }}>
//                     <tr style={{ paddingTop: '15px' }}> 
//                         <th>Email</th>
//                         <td>{email}</td>
//                     </tr>
//                     <tr style={{ paddingTop: '15px' }}>
//                         <th>Username</th>
//                         <td>{username}</td>
//                     </tr>
//                     <tr style={{ paddingTop: '15px' }}>
//                         <th>Contact No.</th>
//                         <td>{contact}</td>
//                     </tr>
//                 </table>
//             </Col>
//         </Row>     
// );
}

export default UserDetails;