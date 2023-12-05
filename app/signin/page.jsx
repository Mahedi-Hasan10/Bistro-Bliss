"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithGithub,signInWithEmailAndPassword , GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";

import React, { useEffect, useState } from "react";
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from "antd";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();

 
  const signInWithGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
    useEffect(() => {
        const user = auth.currentUser;

        if (user) {
         console.log(user);
        } else {
          // No user is signed in.
        }

    }, [])

    const handleGithubClickBtn = () => {
      signInWithPopup(auth, Githubprovider)
        .then((result) => {
          const user = result.user;
          // console.log(user);
          alert(user?.email + " Login Successfull!!!")
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    const handleUserLogin = (values) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          alert("Login Successfull!!!")
          // console.log(user);
          email === ""
          password === ""
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message)
        });
    }



;

  return (
    <section className="flex bg-[#f9f9f7] justify-center items-center w-full p-8">
    <div className="min-w-96 p-10 shadow-lg rounded-md bg-slate-400 flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
      <div>
        <h1 className="text-3xl text-center font-semibold text-black">
          <i className="fa-solid fa-user text-black"></i>User Login
        </h1>
        <hr className="mt-4 mb-4" />
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUserLogin}
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-8">
          <div className="flex flex-col">
            <button
              className="text-[18px] py-2 px-8 rounded-lg flex items-center justify-center text-black bg-white"
              onClick={signInWithGoogle}
            >
              <FcGoogle className="text-[24px] mr-2" /> Continue with Google
            </button>
            <p className="text-center text-white">------or------</p>
            <button
              className="text-[18px] py-2 px-8 rounded-lg flex items-center justify-center text-white bg-black "
              onClick={handleGithubClickBtn}
            >
              <AiFillGithub className="text-[24px] mr-2" /> Continue with
              Github
            </button>
          </div>
        </div>
        <p className="py-2 text-black text-center">
          Dont have accout?{" "}
          <Link href="/register" className="!text-white">
            {" "}
            Create account
          </Link>
        </p>
      </div>
      <Image src="/login.svg" width={400} height={400} alt="login image"/>
    </div>
  </section>
  );
};

export default Page;
