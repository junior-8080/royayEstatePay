'use client'
import React from "react";
import {Input, Select, Table} from "antd";


const TransactionsPage = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Amount(GHS)',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'reason',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        }
    ]
    const dataSource = [
        {
            key: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "+233501234567",
            amount: 250.0,
            status: "Paid",
            reason: "Monthly estate fee",
            createdAt: "2025-09-18T14:32:00Z"
        },
        {
            key: "2",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phoneNumber: "+233209876543",
            amount: 120.5,
            status: "Pending",
            reason: "Maintenance request",
            createdAt: "2025-09-17T09:15:00Z"
        },
        {
            key: "3",
            name: "Kwame Mensah",
            email: "kwame.mensah@example.com",
            phoneNumber: "+233241112233",
            amount: 500.0,
            status: "Failed",
            reason: "Land documentation fee",
            createdAt: "2025-09-15T19:45:00Z"
        }
    ];


    return (
        <div className="p-10">
            <div className="md:w-[40%] ml-auto flex items-center gap-1">
                <Input placeholder="Search by email..."/>
                <Select  className="w-full" defaultValue={"all"} options={[
                    {
                        value: 'all',
                        label: 'All',
                    },
                    {
                        value: 'Success',
                        label: 'Success',
                    },
                    {
                        value: 'pending',
                        label: 'Pending',
                    }, {
                        value: 'failed',
                        label: 'Failed',
                    }]}/>
            </div>
            <Table columns={columns} dataSource={dataSource}/>
        </div>

    )
}

export default TransactionsPage