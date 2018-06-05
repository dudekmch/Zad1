import React from "react";
export const FormContext = React.createContext({
  state: {
    firstName: "",
    lastName: "",
    status: "",
    formOpen: false
  }
});
