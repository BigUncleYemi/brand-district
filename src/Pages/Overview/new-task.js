import { Input, Form, message, Select } from "antd";
import React from "react";
import { Back } from "../../assets/img";
import Books from "./components/books";

import { DashboardHeader, Separator, Text, FormInput } from "../../Components";
import { DocumentUpload, UploadProgress } from "../../Components";

import "./styles.scss";

const NewTask = () => {
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
      <Separator width={0} height="46px" />
      <div className="create-task">
        <div className="create-task__title">
          <Back />{" "}
          <Text fontWeight={700} fontSize="24px" color="#003049">
            Create New Task
          </Text>
        </div>
        <Separator width={0} height="25px" />
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
          <div className="create-task__form_wrapper">
            <div className="create-task__form_column">
              <DocumentUpload />
              <Separator width={0} height="25px" />
              <FormInput
                label="Task Name"
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
                label="Brief Description"
                name="description"
                type="text"
                placeholder=""
                rules={[
                  {
                    required: true,
                    message: "Please input your email/phone number!",
                  },
                ]}
              >
                <Input.TextArea placeholder="" />
              </FormInput>
              <FormInput
                label="Task Type"
                name="type"
                type="text"
                placeholder=""
                rules={[
                  {
                    required: true,
                    message: "Please input your email/phone number!",
                  },
                ]}
              >
                <Select />
              </FormInput>
            </div>
            <div className="create-task__form_column">
              <UploadProgress />
              <Separator width={0} height="20px" />
              <FormInput
                label="Task Name"
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
                label="Task Type"
                name="type"
                type="text"
                placeholder=""
                rules={[
                  {
                    required: true,
                    message: "Please input your email/phone number!",
                  },
                ]}
              >
                <Select />
              </FormInput>
              <FormInput
                label="Task Name"
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
                label="Task Type"
                name="type"
                type="text"
                placeholder=""
                rules={[
                  {
                    required: true,
                    message: "Please input your email/phone number!",
                  },
                ]}
              >
                <Select />
              </FormInput>
              <FormInput
                label="Task Type"
                name="type"
                type="text"
                placeholder=""
                rules={[
                  {
                    required: true,
                    message: "Please input your email/phone number!",
                  },
                ]}
              >
                <Select />
              </FormInput>
            </div>
          </div>
        </Form>
        <div className="btn__wrapper">
          <div className="btn__main">Upload</div>
          <div className="btn__sub">Discard</div>
        </div>
      </div>
      <Separator width={0} height="10px" />
      <Books />
    </div>
  );
};

export default NewTask;
