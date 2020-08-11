import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const CustomForm = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Form form={form} name="dynamic_rule">
      <Form.Item {...formItemLayout} name="title" label="Title">
        <Input placeholder="Please input title" />
      </Form.Item>
      <Form.Item {...formItemLayout} name="content" label="Content">
        <Input placeholder="Please input content" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onSubmit}>
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
