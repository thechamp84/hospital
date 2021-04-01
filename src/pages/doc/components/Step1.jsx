import React, { useState, useEffect } from 'react';
import { Button, Input, Divider, message, Card, Row, Col, Steps, Form, Select  } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { connect, Link } from 'umi';
import { getAllStates } from '../service';
import axios from 'axios';

const Step1 = () => {

const { Option } = Select;
const [states,setState] = useState([]);


const getStates = async() => {
  const plan = await getAllStates().then((res) => {
    console.log("btween",res);
    try {
      if (res) {
        console.log("response coming");
        console.log("Response",res);
        
       }
    } catch (error) {
      console.log("error :",error);
    }
       
   }) 
 }
useEffect(() => {
  getStates();
   }, []);


  //  useEffect(() => {
  //  axios.get("https://api.test.well-em.com/states/all")
  //  .then((res) => {
  //    console.log("axios",res);
  //  })
  //  .catch((err) => {
  //    console.log(err);
  //  })
  // }, []);
   

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

return(
  <Card>
<Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Hospital name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="State"
        name="state"
        rules={[
          {
            required: true,
            message: 'Please input your Contact!',
          },
        ]}
      >
        <Select>
          <Option>A</Option>
        </Select>
      
      </Form.Item>
    </Form>  
    </Card>
);

}


export default Step1;