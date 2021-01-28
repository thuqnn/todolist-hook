import React, { useState } from "react";
import "antd/dist/antd.css";
import classes from "../Login/Login.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import Home from "../components/Home";
import { Link, useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ onLogin, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  let history = useHistory();
  const submitHandler = (e) => {
    history.push("/todo");
    onLogin(details);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.form_login}>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {error !== "" ? <div>{error}</div> : ""}
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          {/* <Link to="/todo">Login</Link> */}
          <button type="button" onClick={submitHandler}>
            LOGIN
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
