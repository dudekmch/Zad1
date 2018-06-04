import { SET_FORM_OPEN, SET_FORM_DATA } from './actions'

export function setFormOpen(formOpen) {
    return { type: SET_FORM_OPEN, payload: formOpen}
}

export function setFormData(formData) {
    return { type: SET_FORM_DATA, payload: formData}
}