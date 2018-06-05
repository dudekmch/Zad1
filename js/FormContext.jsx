import React, { Component } from "react";

const FormContext = React.createContext();

class FormProvider extends Component {
  state = {
    firstName: "",
    lastName: "",
    status: "Wolny",
    formOpen: false
  };

  render() {
    return (
      <FormContext.Provider values={this.state}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}
