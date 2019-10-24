import React, { Component } from 'react';
import {
    Button, Input, Layout, Table, DatePicker, Form, InputNumber
} from 'antd';
import shortid from 'shortid';
import './App.css';


const { Header, Footer, Content } = Layout;
const { Column, ColumnGroup } = Table;

class ContactApp extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }

    handleSubmit = e => {
      e.preventDefault();
      const { form } = this.props;
      const { dataSource } = this.state;
      form.validateFields((err, fieldsValue) => {
          if (err) {
              return;
          }

          const value = {
              ...fieldsValue,
              birthday: fieldsValue.birthday.format('DD-MM-YYYY'),
              key: shortid.generate(),
          };

          dataSource.push(value);
          form.resetFields();
      });
  }

  render() {
      const { form } = this.props;
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
          <Layout className="App">
              <Header className="App-header">
                  <h1>Contact Diary</h1>
              </Header>
              <Content className="App-content">
                  <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                  <Table dataSource={this.state.dataSource}>
                      <ColumnGroup title="Name">
                          <Column
                              title="First Name"
                              dataIndex="firstName"
                              key="firstName"
                          />
                          <Column
                              title="Last Name"
                              dataIndex="lastName"
                              key="lastName"
                          />
                      </ColumnGroup>
                      <Column
                          title="Age"
                          dataIndex="age"
                          key="age"
                      />
                      <Column
                          title="Birthday"
                          dataIndex="birthday"
                          key="birthday"
                      />
                      <Column
                          title="Hobbies"
                          dataIndex="hobbies"
                          key="hobbies"
                      />
                  </Table>
              </Content>
              <Footer className="App-footer">&copy; My Contact Diary</Footer>
          </Layout>
      );
  }
}

export default Form.create()(ContactApp);
