"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { AuthView, LoginBody } from "@/lib/type";
import AuthTitle from "@/features/AuthPage/components/AuthTitle";
import {useRouter} from "next/navigation";

type Props = {
  onSubmit: (data: LoginBody) => Promise<void>;
  setAuthView: (view: AuthView) => void;
  isSubmitting: boolean;
};

const SignInForm = ({ onSubmit, setAuthView, isSubmitting }: Props) => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: LoginBody) => {
    // await onSubmit({ email: values.email, password: values.password });
    router.push('/dashboard');
  };

  return (
    <div className="w-full shadow-md rounded-md p-6">
      <AuthTitle
        title="Admin Portal"
        subtitle=""
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
            { required: true },
            { type: "email"},
          ]}
        >
          <Input
            type="email"
            placeholder="eg. johnfrancis@gmail.com"
            className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            size={"large"}
          />
        </Form.Item>
          <Form.Item
              name="password"
              label="Password"
              rules={[
                  { required: true },
              ]}
          >
              <Input.Password
                  placeholder="Enter passowrd"
                  className="w-full px-4 py-2 rounded-md bg-gray-light focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                  size={"large"}
              />
          </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-60 text-white py-2 px-4 rounded-md  transition duration-200"
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
