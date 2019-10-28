import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

const ContactTable = () => {
    const contact = useSelector(state => state.contacts);
    return (
        <Table dataSource={Object.values(contact)}>
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
    );
};

export default ContactTable;
