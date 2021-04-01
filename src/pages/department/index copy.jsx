import React, { useState } from "react";
import { Popconfirm, Button, Input, Card, Form, Avatar, Tag, Select, Table } from 'antd';
import ReactDOM from "react-dom";
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import { DeleteOutlined, EditOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';


const Index = () => {

  const [designation, setDesignation] = useState([]);
  
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

  // function handleChange(i, event) {
  //   const values = [...designation];
  //   values[i].value = event.target.value;
  //   setFields(values);
  //   console.log("field values",designation);
  // }

  // function handleAdd() {
  //   const values = [...designation];
  //   values.push({value : null});
  //   setFields(values);
  // }

  // function handleRemove(i) {
  //   const values = [...designation];
  //   values.splice(i, 1);
  //   setFields(values);
  // }

  // const getDesignation = (e) => {
  //   setTags(e.target.value);
  //   setFields([...designation,tags]);
  //   console.log("addTags",tags,designation);
  // };

  const addTags = (e) => {
    e.preventDefault();
    const name = e.target.designation;
    const value = e.target.value;
    setDesignation({[name] : value});
    console.log("addTags",designation);
  }

  return (
    <PageHeaderWrapper title="Department">
      <IntlProvider value={enUSIntl}>
        <Card>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Department"
        name="department"
        rules={[
          {
            required: true,
            message: 'Please input Department name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

       <Form.Item
        label="Designation"
        name="designation"
        rules={[
          {
            required: true,
            message: 'Please input your Designation!',
          },
        ]}
      >     
        {/* {designation.map((field, idx) => {
            return (
          <div key={`${field}-${idx}`}>
            <Button onClick={() => handleRemove(idx)} type="danger">
              x
            </Button>
            <Input
              type="text"
              placeholder="Enter Designation"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />
          </div>
            )
      })}
        <Button type="primary" onClick={() => handleAdd()}>
          <PlusOutlined />
          Add Designation
         </Button> */}
         <Input />
         <Button onClick={addTags}>Add</Button>
       </Form.Item>  
         </Form>
         <div className="designationTags" >
          
         </div>
    </Card>
    </IntlProvider>
    </PageHeaderWrapper>
  );
}

export default Index;
