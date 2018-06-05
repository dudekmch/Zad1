import React from "react";
import { connect } from "react-redux";
import { string, bool, func } from "prop-types";
import axios from "axios";
import Post from "./Post";
import Form from "./Form";
import { setFormData } from "./actionCreators";

class ClientApp extends React.Component {
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
    searchId: ""
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
    this.props.handleFormOpenChange({formOpen: true});
  };

  render() {
    return (
        <div className="app">
        {this.props.formOpen && <Form submitForm={this.handleSubmitForm} />}
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
          <button onClick={this.handleOpenForm}>Open form</button>
          <div>
            <span>Imie: {this.props.firstName}</span>
          </div>
          <div>
            <span>Nazwisko: {this.props.lastName}</span>
          </div>
          <div>
            <span>Status: {this.props.status}</span>
          </div>
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

ClientApp.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  status: string.isRequired,
  formOpen: bool.isRequired,
  handleFormOpenChange: func.isRequired
};

const mapStateToProps = state => ({firstName: state.firstName, lastName: state.lastName, status: state.status, formOpen: state.formOpen});
const mapDispatchToProps = (dispatch) =>({
  handleFormOpenChange(isFormOpen) {
    dispatch(setFormData(isFormOpen)
)}});
export default connect(mapStateToProps, mapDispatchToProps)(ClientApp);
