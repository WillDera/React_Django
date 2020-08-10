import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

// const formItemLayout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 8,
//   },
// };
// const formTailLayout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 8,
//     offset: 4,
//   },
// };

class FormLayout extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item
            name="username"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
          >
            <Input placeholder="Please input your name" />
          </Form.Item>
          <Form.Item name="nickname" label="Nickname">
            <Input placeholder="Please input your nickname" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Nickname is required</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Check</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
