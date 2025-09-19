'use client'
import React, {useState} from "react";
import {Button, Form, Input, InputNumber, Radio,} from "antd";
import { FaUser,FaBlenderPhone } from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import { GiMoneyStack,GiPayMoney } from "react-icons/gi";
import {Loader} from "@/components/core/Loaders";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa6";
import {PaymentDraftBody} from "@/lib/type";
import PaymentVerification from "@/features/LandingPage/components/PaymentVerification";
import Link from "next/link";


const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [view,setView] = useState<'payment'| 'verify' | 'otp' >('payment');
    const [paymentDataDraft,setPaymentDraft] = useState<PaymentDraftBody>();

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
        setPaymentDraft(values)
        setView('otp')

    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-300 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex items-center justify-center">
            <div className="w-full md:max-w-5xl rounded-2xl shadow-2xl border-none p-6">
                <div className="text-center my-1">
                    <img src={"/logo.png"} alt={"logo"} className="w-[80px] md:w-[120px] mx-auto"/>
                </div>
                {view === 'payment' &&<Form
                    initialValues={{paymentType:"card"}}
                    name="contact-form"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    size="large"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Form.Item
                            label="Email Address"
                            name="email"
                            // rules={[{required: true}]}
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
                    </div>
                    <Form.Item label="Payment Method" name={"paymentType"} rules={[{required: true}]}>
                        <Radio.Group block options={options} defaultValue="card"
                                     optionType="button"
                                     buttonStyle="solid"/>
                    </Form.Item>
                    <Form.Item
                        label="Purpose"
                        name="purpose"
                        // rules={[{required: true}]}
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
                            className="bg-primary font-semibold cursor-pointer"
                            htmlType="submit"
                            loading={loading}
                            block
                            iconPosition={"end"}
                            icon={<GiPayMoney className="text-white"/>}
                        >
                            {loading ? <Loader/> : 'Pay Now'}
                        </Button>
                    </Form.Item>
                </Form>}
                {view === 'otp' && <div className="flex flex-col justify-center items-center space-y-8">
                    <p className="text-xl text-orange-500">Let’s Verify Your Number</p>
                    <p className="text-sm">A verification code has been set to your number: {paymentDataDraft?.phoneNumber}</p>
                    <Input.OTP length={6} size="large"/>
                    <Button type="primary" size="large" className="bg-primary font-semibold cursor-pointer w-[50%]" onClick={() => setView('verify')}>Proceed</Button>
                    <p className="text-blue-800 px-10"   onClick={() => setView('payment')}>Back</p>
                </div>}
                {view === 'verify' && <PaymentVerification handleView={() => setView('payment')} status={ 'success'}/>}
                {view === 'payment' && <Link className="text-center text-primary underline" href={"/auth"}>Admin Portal</Link>}
            </div>
        </div>
    );
}

export default LandingPage