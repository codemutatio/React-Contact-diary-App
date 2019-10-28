import {
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    POST_CONTACT,
    POST_CONTACT_SUCCESS,
    UPDATE_STORE,
    POST_CONTACTS_ERROR,
} from './types';
  
  export const contactsReceived = contacts => ({ type: FETCH_CONTACTS_SUCCESS, payload: contacts });
  
  export const contactsFailed = error => ({ type: FETCH_CONTACTS_ERROR, error });
  
  export const fetchContacts = () => ({ type: FETCH_CONTACTS_REQUEST });

  export const postContact = contact => ({  type: POST_CONTACT,  payload: contact });

  export const postContactSuccess = () => ({ type: POST_CONTACT_SUCCESS });

  export const updateStore = contact => ({  type: UPDATE_STORE,  payload: contact });
  
  export const contactPostFailed = error => ({ type: POST_CONTACTS_ERROR, error });
