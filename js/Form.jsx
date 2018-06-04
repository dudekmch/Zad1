import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { connect } from 'react-redux'
import { setFormData } from "./actionCreators";

const Modal = styled.div`
position: fixed; 
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto; 
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;
const ModalContent = styled.div`
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: 80%; `;

class Form extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    status: this.props.status ? this.props.status : 'Wolny'
  }

  props = {
    firstName: string,
    lastName: string,
    status: string,
    handleFormDataChange: Function
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handleStatusChange = event => {
    this.setState({ status: event.target.value });
  };

  handelSubmitForm = () => {
    this.props.handleFormDataChange(Object.assign({}, this.state, {formOpen: false}));
  };

  render() {
    return (
      <Modal>
        <ModalContent>
          <div>
            First name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div>
            Last name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div>
            Employent status:
            <select onChange={this.handleStatusChange} value={this.state.status}>
              <option value="Zatrudniony">Zatrudniony</option>
              <option value="Wolny">Wolny</option>
            </select>
            </div>
            <div>
            <button onClick={this.handelSubmitForm}>Save Form</button>
          </div>
        </ModalContent>
      </Modal>
    );
  }
}

Form.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  status: string.isRequired,
  handleFormDataChange: func.isRequired
};

const mapStateToProps = state => ({firstName: state.firstName, lastName: state.lastName, status: state.status});
const mapDispatchToProps = (dispatch) =>({
  handleFormDataChange(formData) {
    dispatch(setFormData(formData)
)}});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
