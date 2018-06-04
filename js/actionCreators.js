import { SET_FORM_OPEN } from './actions'

export function setFormOpen(formOpen) {
    return { type: SET_FORM_OPEN, payload: formOpen}
}