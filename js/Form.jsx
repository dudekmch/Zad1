import React, { Component } from "react";
import styled from "styled-components";
import { FormContext } from "./FormContext";

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
const ModalContent = styled.form`
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: 80%; `;

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    status: "Zatrudniony"
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


  render() {
    return (
      <Modal>
          <FormContext.Consumer>
            {context => (
              <ModalContent onSubmit={context.setFormState}>
                <div>
                  First name:
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    defaultValue={context.state.firstName}
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Last name:</label>
                  <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    defaultValue={context.state.lastName}
                  />
                </div>
                <div>
                  Employent status:
                  <select
                    defaultValue={context.state.status|| "Wolny"}
                    name="status"
                  >
                    <option value="Zatrudniony">Zatrudniony</option>
                    <option value="Wolny">Wolny</option>
                  </select>
                </div>
                <div>
                  <button type="submit">Save Form</button>
                </div>
                </ModalContent>
            )}
          </FormContext.Consumer>
      </Modal>
    );
  }
}

export default Form;
