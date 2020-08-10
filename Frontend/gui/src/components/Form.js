import React from "react";
import { Form, Input, Button } from "antd";
class CustomForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item name="title" label="Title">
            <Input placeholder="Please input title" />
          </Form.Item>
          <Form.Item name="content" label="Content">
            <Input placeholder="Please input content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Check</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
