import SET_FORM_OPEN from './actions'

const DEFAULT_STATE = {
    formOpen: false
};

const setFormOpen = (state, action) => Object.assign({}, state, {formOpen: action.payload})

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_FORM_OPEN:
            return setFormOpen(state, action);
        default:
            return state;
    }
}

export default rootReducer