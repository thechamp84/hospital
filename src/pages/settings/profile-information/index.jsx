import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Row, Col, Upload } from 'antd';
import Avatar from 'antd/lib/avatar';
import { connect } from 'umi';
import style from '../styles.less';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import CountryPhoneCode from '@/lib/antd-country-phone-input';
import { updateProfileInformationCompany, updateProfileInformationAdmin } from '../serivce';

const ProfileInformation = ({ user, dispatch }) => {
  const loginType = localStorage.getItem('login-type');
  const [imageUrl, setImageUrl] = useState('');
  const [, setLoading] = useState(false);

  const [form] = Form.useForm();

  const headers = {
    'x-auth-token': localStorage.getItem('TOKEN'),
  };
  console.log('user', user);

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
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

  const normFile = (e) => {
    return e.file.originFileObj;
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // eslint-disable-next-line no-shadow
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    form.setFieldsValue({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      mobile: { phone: user?.contactNo, code: user?.countryCode, short: 'SA' },
      floor: user?.floor,
      buildingNo: user?.buildingNo,
      streetName: user?.streetName,
    });
  }, [user]);

  const onFinish = (values) => {
    Object.assign(values, {
      contactNo: values.mobile.phone,
      countryCode: values.mobile.code[0] === '+' ? values.mobile.code : '+' + values.mobile.code,
    });

    delete values['mobile'];
    console.log('values', values);

    updateProfileInformationAdmin(values)
      .then((res) => {
        if (res.success) {
          message.success(`Profile updated Successfully`);
          if (dispatch) {
            dispatch({
              type: 'user/fetchCurrent',
            });
          }
        }
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div className={style.profileDetails}>
      <div className={style.headerNav}>
        <p>Profile Information</p>
      </div>

      <div className={style.formDiv}>
        <Form {...layout} name="basic" hideRequiredMark={true} onFinish={onFinish} form={form}>
          <Row>
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              <>
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[{ required: true, message: 'Please enter first name' }]}
                >
                  <Input placeholder="Please enter first name" />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[{ required: true, message: 'Please enter last name' }]}
                >
                  <Input placeholder="Please enter last name" />
                </Form.Item>
              </>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: <span style={{ color: 'red' }}>Please enter correct email</span>,
                  },
                ]}
              >
                <Input placeholder="Please enter your email" />
              </Form.Item>

              <Form.Item
                label="Contact Number"
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
              </Form.Item>

              <Form.Item
                label="Street name"
                name="streetName"
                rules={[{ required: true, message: 'Please input your street no!' }]}
              >
                <Input placeholder="Please input your street no." />
              </Form.Item>

              <Form.Item
                label="Building no"
                name="buildingNo"
                rules={[{ required: true, message: 'Please input your building no.!' }]}
              >
                <Input placeholder="Please input your building no." />
              </Form.Item>

              <Form.Item
                label="Floor"
                name="floor"
                rules={[{ required: true, message: 'Please input your building no.!' }]}
              >
                <Input placeholder="Please input your building no." />
              </Form.Item>

              <Form.Item>
                <Row justify="center" gutter={[16, 0]}>
                  <Button type="primary" htmlType="submit" style={{ marginRight: 30 }}>
                    Update Info
                  </Button>
                </Row>
              </Form.Item>
            </Col>

            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <div className={style.profileImages}>
                <div>
                  {
                    // eslint-disable-next-line no-nested-ternary
                    imageUrl ? (
                      <img src={imageUrl} alt="avatar" className={style.imageUploader} />
                    ) : user?.profile_image ? (
                      <img src={user?.profile_image} alt="avatar" className={style.imageUploader} />
                    ) : (
                          <Avatar
                            style={{
                              backgroundColor: '#0149ff',
                              marginBottom: '15px',
                            }}
                            size={150}
                            shape="square"
                            icon={<UserOutlined />}
                          />
                        )
                  }
                </div>
                <div className={style.profileImages}>
                  <Upload
                    name="profileImage"
                    action="http://aneem_admin.bawsala.net/api/v1/admin/profile"
                    method="PUT"
                    headers={headers}
                    onChange={handleChange}
                    className="avatar-uploader"
                  >
                    <Button type="primary">
                      <UploadOutlined /> Click to Upload
                      </Button>
                  </Upload>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ user }) => ({
  user: user.currentUser,
}))(ProfileInformation);
