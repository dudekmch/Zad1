import React from "react";
import { FormContext } from "./FormContext";

class FormContextProvider extends React.Component {
  state = {
    formOpen: "false",
    firstName: "",
    lastName: "",
    status: ""
  };

  setFormContextState = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const el = Array.from(elements).reduce((prev, next) => {
      const { name, value, type } = next;
      if (type === "submit") return prev;
      return Object.assign({}, prev, { [name]: value });
    }, {});

    this.setState(Object.assign({}, el, { formOpen: false }));
  };
  render() {
    return (
      <FormContext.Provider value={{ state: this.state, setFormState: this.setFormContextState }}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default FormContextProvider
