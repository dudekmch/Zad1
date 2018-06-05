import React, { Component, Fragment } from "react";
import axios from "axios";
import Post from "./Post";
import Form from "./Form";
import { FormContext } from "./FormContext";

class ClientApp extends Component {
  state = {
    searchTerm: "",
    data: [
      {
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }
    ],
    searchId: "",
    firstName: "",
    lastName: "",
    status: "",
    formOpen: false
  };

  componentDidMount() {
    this.getAllPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchId && this.state.searchId !== prevState.searchId) {
      this.getPostById();
    }

    if (!this.state.searchId) {
      this.getAllPosts();
    }
  }

  getPostById = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.searchId}`)
      .then(response => response.data)
      .then(({ userId, id, title, body }) => ({ userId, id, title, body }))
      .then(data => this.setState({ data: [data] }));
  };

  getAllPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        response.data.map(({ userId, id, title, body }) => ({
          userId,
          id,
          title,
          body
        }))
      )
      .then(data => this.setState({ data }));
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchById = event => {
    this.setState({ searchId: event.target.value });
  };

  handleSubmitForm = formState => {
    this.setState(Object.assign({}, { formOpen: false }, formState));
  };

  handleOpenForm = () => {
    this.setState({ formOpen: true });
  };

  render() {
    return (
      <div className="app">
        <input
          type="text"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
        />
        <input
          type="text"
          onChange={this.handleSearchById}
          value={this.state.searchId}
        />
        <FormContext.Consumer>
          {context => (
            <Fragment>
              <button onClick={context.setFormOpen}>Open form</button>
              {context.state.formOpen && <Form />}
              <div>
                <span>Imie: {context.state.firstName}</span>
              </div>
              <div>
                <span>Nazwisko: {context.state.lastName}</span>
              </div>
              <div>
                <span>Status: {context.state.status}</span>
              </div>
            </Fragment>
          )}
        </FormContext.Consumer>
        <div>
          {this.state.data
            .filter(
              post =>
                post.title
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(post => <Post key={post.id} {...post} />)}
        </div>
      </div>
    );
  }
}

export default ClientApp;
