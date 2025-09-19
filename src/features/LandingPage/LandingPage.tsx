'use client'
import React, {useState} from "react";
import {Button, Form, Input, InputNumber, Radio,} from "antd";
import { FaUser,FaBlenderPhone } from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import { GiMoneyStack,GiPayMoney } from "react-icons/gi";
import {Loader} from "@/components/core/Loaders";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa6";





const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const options = [
        {
            label: <div className="flex items-center gap-1">
                <FaCreditCard className="text-xl text-orange-400"/>
                <p>Card</p>
            </div>, value: 'card'
        },
        {
            label: <div className="flex items-center gap-1">
                <TbDeviceMobileDollar className="text-xl text-orange-400"/>
                <p>Momo</p>
            </div>, value: 'momo'
        },
    ]

    const onFinish = async (values: any) => {
        setLoading(true);
        setMessage('');

    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-300 p-8 px-4 flex items-center justify-center">
            <div className="w-full max-w-lg rounded-2xl shadow-2xl border-none px-6 py-3">
                <div className="text-center my-1">
                    <img src={"/logo.png"} alt={"logo"} className="w-[80px] mx-auto"/>
                </div>
                <Form
                    name="contact-form"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    size="large"
                >
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[{required: true}]}
                    >
                        <Input
                            prefix={<FaUser className="text-orange-400"/>}
                            placeholder="Enter your full name"
                            name="name"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{required: true}]}
                    >
                        <Input
                            prefix={<FaBlenderPhone className="text-orange-400"/>}
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[{required: true}]}
                    >
                        <Input
                            prefix={<IoMail className="text-orange-400"/>}
                            placeholder="Enter your email address"
                            name="email"
                            type="email"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Amount"
                        name="amount"
                        rules={[{required: true}]}
                    >
                        <InputNumber
                            prefix={<GiMoneyStack className="text-orange-400"/>}
                            placeholder="Enter amount"
                            name="amount"
                            className="w-full"
                        />
                    </Form.Item>
                    <Form.Item label="Payment Method" name={"paymentType"}>
                        <Radio.Group block options={options} defaultValue="card"
                                     optionType="button"
                                     buttonStyle="solid"/>
                    </Form.Item>
                    <Form.Item
                        label="Purpose"
                        name="purpose"
                        rules={[{required: true}]}
                    >
                        <Input.TextArea
                            placeholder="Please explain the purpose of this transaction"
                            name="purpose"
                            rows={5}
                        />
                    </Form.Item>

                    <Form.Item className="my-8">
                        <Button
                            type="primary"
                            className="bg-blue-600  font-semibold"
                            htmlType="submit"
                            loading={loading}
                            block
                            iconPosition={"end"}
                            icon={<GiPayMoney className="text-white"/>}
                        >
                            {loading ? <Loader/> : 'Pay Now'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LandingPage