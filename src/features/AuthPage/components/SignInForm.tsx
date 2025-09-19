"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { AuthView, LoginBody } from "@/lib/type";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";

type Props = {
  onSubmit: (data: LoginBody) => Promise<void>;
  setAuthView: (view: AuthView) => void;
  isSubmitting: boolean;
};

const SignInForm = ({ onSubmit, setAuthView, isSubmitting }: Props) => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: LoginBody) => {
    await onSubmit({ email: values.email, password: values.password });
  };

  return (
    <div>
      <AuthTitle
        title="Login into your account"
        subtitle="Enter your details to login."
      />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        <Form.Item
          name="email"
          label={<span className="block text-sm font-medium mb-1">Email</span>}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            type="email"
            placeholder="eg. johnfrancis@gmail.com"
            className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            size={"large"}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200"
            size={"large"}
            loading={isSubmitting}
          >
            Login
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default SignInForm;
