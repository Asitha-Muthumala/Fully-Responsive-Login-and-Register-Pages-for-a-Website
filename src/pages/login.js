import React from 'react'
import '../assets/styles/WebLogin.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

import { Button, Checkbox, Form, Input, Typography } from 'antd';
const { Title } = Typography;

function WebLogin() {
    return (
        <div className='weblogin-page'>
            <div className='image-wrapper'></div>
            <div className='login-form'>
                <div className='input-section'>

                    <div className='form-section'>

                        <div className='icon'>
                            <FontAwesomeIcon icon={faLockOpen} />
                        </div>

                        <div className='login-heading'>
                            <Title level={2}>Log In</Title>
                        </div>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                        >

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="/login">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item className='button-style'>
                                <Button htmlType="submit" className="login-form-button" type='primary'>
                                    Log in
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>

                </div>
                <div className='link-section'>
                    <p className='link-heading'>Not Registered Yet? <a href='/register' className='link'>Create an account</a></p>
                </div>
            </div>
        </div>
    );
}

export default WebLogin;