import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Button, Input, DatePicker, Form, InputNumber
} from 'antd';

import shortid from 'shortid';

const  ContactForm = props => {
    const dispatch = useDispatch();
    const { form } = props;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            const value = {
                ...fieldsValue,
                birthday: fieldsValue.birthday.format('DD-MM-YYYY'),
                key: shortid.generate(),
            };

            dispatch({
                type: 'ADD_CONTACT',
                value,
            });
            form.resetFields();
        });
    };

    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: {
            sm: { span: 10 },
            xs: { span: 20 },
        },
        wrapperCol: {
            sm: { span: 5 },
            xs: { span: 10 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            sm: {
                offset: 8,
                span: 10,
            },
            xs: {
                offset: 0,
                span: 5,
            },
        },
    };
    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="First Name">
                {getFieldDecorator('firstName', {
                    rules: [{
                        message: 'Please input your friend\'s Firstname!',
                        required: true,
                        whitespace: true,
                    }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
                {getFieldDecorator('lastName', {
                    rules: [{
                        message: 'Please input your friend\'s Lastname!',
                        required: true,
                        whitespace: true,
                    }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Birthday">
                {getFieldDecorator('birthday', {
                    rules: [{
                        message: 'Please input your friend\'s Birthday!',
                        required: true,
                    }],
                })(<DatePicker placeholder="Select your friend\'s Birthday" />)}
            </Form.Item>
            <Form.Item label="Age">
                {getFieldDecorator('age', {
                    rules: [{
                        message: 'Please input your friend\'s Age!',
                        required: true,
                    }],
                }, { initialValue: 0 })(<InputNumber min={1} max={100} />)}
            </Form.Item>
            <Form.Item label="Hobbies">
                {getFieldDecorator('hobbies', {
                    rules: [{
                        message: 'Please input your friend\'s hobbies',
                        required: true,
                        whitespace: true,
                    }],
                })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                            Add Contact
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form.create()(ContactForm);
