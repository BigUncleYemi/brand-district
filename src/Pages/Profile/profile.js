import React from "react";
import { Form, message, Input } from "antd";
import { Edit } from "../../assets/img";
import "./styles.scss";
import { DashboardHeader, Separator, Text, FormInput } from "../../Components";

const Profile = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Welcome!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <DashboardHeader />
      <Separator width={0} height="41px" />
      <Text fontWeight={700} fontSize="24px" color="#003049">
        Profile
      </Text>
      <Separator width={0} height="12px" />
      <div className="profile__image">
        <div className="profile__image__edit">
          <Edit />
        </div>
      </div>
      <Separator width={0} height="33px" />
      <div className="profile__balance">
        <Text fontWeight={500} fontSize="20px" color="#003049">
          Available Wallet Balance:
        </Text>
        <Text fontWeight={500} fontSize="20px" color="#003049">
          60,000 Points
        </Text>
      </div>
      <Separator width={0} height="24px" />
      <Form
        name="basic"
        form={form}
        layout="vertical"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <FormInput
          label="Company’s Name"
          name="name"
          type="text"
          rules={[
            {
              required: true,
              message: "Please input your email/phone number!",
            },
          ]}
        >
          <Input />
        </FormInput>
        <FormInput
          label="Email Address"
          name="email"
          type="text"
          rules={[
            {
              required: true,
              message: "Please input your email/phone number!",
            },
          ]}
        >
          <Input />
        </FormInput>
        <FormInput
          label="Phone Number"
          name="name"
          type="text"
          rules={[
            {
              required: true,
              message: "Please input your email/phone number!",
            },
          ]}
        >
          <Input />
        </FormInput>
      </Form>
      <Text fontWeight={500} fontSize="20px" color="#001825" margin="0 0 7px 0">
        Change Password
      </Text>
      <Text
        fontWeight={400}
        fontSize="14px"
        color="#003049"
        margin="0 0 13px 0"
      >
        Click the button below to change your password
      </Text>
      <div className="change-password-button">Change Password</div>
      <Separator width={0} height="27px" />
      <div className="buttons_wrapper">
        <div className="button__delete">Delete Account</div>
        <div className="button__save">Save Changes</div>
      </div>
    </div>
  );
};

export default Profile;
