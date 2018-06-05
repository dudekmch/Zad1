import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
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
const ModalContent = styled.form`
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: 80%; `;

class Form extends React.Component {
  handelSubmitForm = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    const el = Array.from(elements).reduce((prev, next) => {
      const { name, value, type } = next;
      if (type === "button") return prev;
      return Object.assign({}, prev, { [name]: value });
    }, {});

    console.log(el);

    this.props.handleFormDataChange(Object.assign({}, el, { formOpen: false }));
  };

  render() {
    return (
      <Modal>
        <ModalContent onSubmit={this.handelSubmitForm}>
          <div>
            First name:
            <input
              id="firstName"
              name="firstName"
              type="text"
              defaultValue={this.props.firstName}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name:</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              defaultValue={this.props.lastName}
            />
          </div>
          <div>
            Employent status:
            <select defaultValue={this.props.status || "Wolny"} name="status">
              <option value="Zatrudniony">Zatrudniony</option>
              <option value="Wolny">Wolny</option>
            </select>
          </div>
          <div>
            <button type="submit">Save Form</button>
          </div>
        </ModalContent>
      </Modal>
    );
  }
}

Form.defaultProps = {
  firstName: "",
  lastName: "",
  status: "",
  handleFormDataChange: () => {}
};

Form.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  status: string.isRequired,
  handleFormDataChange: func.isRequired
};

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  status: state.status
});
const mapDispatchToProps = dispatch => ({
  handleFormDataChange(formData) {
    dispatch(setFormData(formData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
