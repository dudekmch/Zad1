import { SET_FORM_DATA } from './actions'

const DEFAULT_STATE = {
    firstName: '',
    lastName: '',
    status: '',
    formOpen: false
};

const setFormData = (state, action) => Object.assign({}, state, action.payload)



const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_FORM_DATA:
            return setFormData(state, action);
        default:
            return state;
    }
}

export default rootReducer