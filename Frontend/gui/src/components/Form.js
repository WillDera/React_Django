import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

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

  const onSubmit = async (requestType) => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);

      switch (requestType) {
        case "post":
          axios
            .post("http://127.0.0.1:8000/api/", {
              title: values.title,
              content: values.content,
            })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
        case "put":
          axios
            .put(`http://127.0.0.1:8000/api/${articleID}/`, {
              title: values.title,
              content: values.content,
            })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Form form={form} name="dynamic_rule">
      <Form.Item name="title" label="Title">
        <Input placeholder="Please input title" />
      </Form.Item>
      <Form.Item name="content" label="Content">
        <Input placeholder="Please input content" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onClick={(event) =>
            onSubmit(event, this.props.requestType, this.props.articleID)
          }
        >
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
