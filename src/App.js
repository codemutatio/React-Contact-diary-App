import React from 'react';
import { Layout } from 'antd';

import './App.css';
import ContactForm from './contactForm';
import ContactTable from './contactTable';

const { Header, Footer, Content } = Layout;
const ContactApp = () => (
    <Layout className="App">
        <Header className="App-header">
            <h1>Contact Diary</h1>
        </Header>
        <Content className="App-content">
            <ContactForm />
            <ContactTable />
        </Content>
        <Footer className="App-footer">&copy; My Contact Diary</Footer>
    </Layout>
);

export default ContactApp;
