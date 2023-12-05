"use client";


import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from "antd";

import Image from "next/image";
import Link from "next/link";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.init";

const Page = () => {
  const [form] = Form.useForm();

    const auth = getAuth(app);
    const handleUserRegister= (values) => {
      const { email, password } = values;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          alert("register Successfull!!!")
          console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

;

  return (
    <section className="flex bg-[#f9f9f7] justify-center items-center w-full p-8">
    <div className="min-w-96 p-10 shadow-lg rounded-md bg-slate-400 flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
      <div>
        <h1 className="text-3xl text-center font-semibold text-black">
          <i className="fa-solid fa-user text-black"></i>User Register
        </h1>
        <hr className="mt-4 mb-4" />
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUserRegister}
          style={{ color: "white" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Enter a valid email address!",
              },
            ]}
          >
            <Input style={{ padding: "8px 8px" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Please input at least 6 character",
              },
            ]}
          >
            <Input.Password style={{ padding: "8px 8px" }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#176ABC",
                height: "40px",
                padding: "0px 115px",
                "margin-left": "-90px",
              }}
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
        
        <p className="py-2 text-black text-center">
          Already have an accout?{" "}
          <Link href="/signin" className="!text-white">
            {" "}
           Sign In
          </Link>
        </p>
      </div>
      <Image src="/login.svg" width={400} height={400} alt="login image"/>
    </div>
  </section>
  );
};

export default Page;
