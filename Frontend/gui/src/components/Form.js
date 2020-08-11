import React from "react";
import { Form, Input, Button } from "antd";
class CustomForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    // const title = event.target.elements.title.value;
    // const content = event.target.elements.content.value;

    console.log("Hello");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Please input title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Please input content" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={this.handleFormSubmit}
              htmlType="submit"
            >
              submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
