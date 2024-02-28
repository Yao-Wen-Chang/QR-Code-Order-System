import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useForm } from 'antd';

const Login = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate();
  
  const submitHandler = () => {
    try {
      // const res = axios.post("http://localhost:8000/api/handle-login-form-submission/", {
      //   name: form.getFieldValue("name"),
      //   headcount: form.getFieldValue("headcount")
      // });
      // console.log(res);   
      navigate('/order');
    } catch (error) {
      console.log('Error subitting form:', error);
    }

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        form={form}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Customer Name"
          name="name"
          rules={[{ required: true, message: 'Please input your preffered name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Headcount"
          name="headcount"
          rules={[{ required: true, message: 'Please input how many people!' }]}
        >
          <Input type="number" min={1} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={submitHandler}>
            Submit
          </Button>
        </Form.Item>
      </Form>
  </div>
  )
}

export default Login