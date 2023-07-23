import React from 'react'
import '../assets/styles/WebRegister.css';

import { Button, Checkbox, Form, Input, Row, Col } from 'antd';

function WebRegister() {
  return (
    <div className='webregister-page'>
      <div className='register-form'>
        <div className='input-section'>
          <div className='input-section-box'>
            <h2>Register Here</h2>
            <p className='link-heading'>Already have an account? <a href='/login' className='link'>Log In</a></p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >

              <Row gutter={[16]}>
                <Col md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                </Col>

                <Col md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="nic"
                rules={[
                  {
                    required: true,
                    message: 'Please input your NIC!',
                  },
                ]}
              >
                <Input placeholder="NIC" />
              </Form.Item>

              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'Please input your address!',
                  },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input placeholder="Enter Your Email" />
              </Form.Item>

              <Form.Item
                name="createPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Create Password!',
                  },
                ]}
              >
                <Input placeholder="Create Password" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Confirm Password!',
                  },
                ]}
              >
                <Input placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>I agree with <a href='/login' className='tac-link'>Terms and Conditions</a></Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item className='button-style'>
                <Button htmlType="submit" className="login-form-button" type='primary'>
                  Register
                </Button>
              </Form.Item>

            </Form>
          </div>
        </div>
      </div>
      <div className='image-wrapper-r'></div>
    </div>
  );
}

export default WebRegister;