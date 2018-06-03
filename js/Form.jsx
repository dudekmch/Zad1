import React from "react";
import { func } from "prop-types";
import styled from "styled-components";

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
    firstName: "",
    lastName: "",
    status: "Zatrudniony"
  };

  props = {
    submitForm: Function
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
    this.props.submitForm(this.state);
  };

  render() {
    return (
      <Modal>
        <ModalContent>
          <div>
            First name:
            <input
              type="text"
              onChange={this.handleFirstNameChange}
              value={this.state.firstName}
            />
          </div>
          <div>
            Last name:
            <input
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastName}
            />
          </div>
          <div>
            Employent status:
            <select onChange={this.handleStatusChange}>
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
  submitForm: func.isRequired
};

export default Form;
