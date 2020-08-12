import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }

  // TODO: Fix the bug here, the function isn't properly doing what it's meant to do
  // TODO: Also find a way to either refresh on completion or not refresh but update the display

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />

        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ArticleDetail;
