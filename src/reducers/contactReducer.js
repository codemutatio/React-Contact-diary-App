import {
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_ERROR,
  POST_CONTACTS_ERROR,
  UPDATE_STORE,
  POST_CONTACT_SUCCESS
} from '../actions/types';

const initialState = {
  contacts: [],
  isLoading: false,
};

// export const getContacts = state => state.contacts;

export default function (state = initialState, action) {
  switch (action.type) {
  case FETCH_CONTACTS_SUCCESS:
      return {
          ...state,
          isLoading: false,
          contacts: action.payload,
          error: null,
      };
  case UPDATE_STORE:
      return {
          ...state,
          contacts: action.payload,
          error: null,
      };
  case FETCH_CONTACTS_ERROR:
      return { ...state, isLoading: false, error: action.error };
  case POST_CONTACT_SUCCESS:
      return {
          ...state,
          isLoading: false,
          error: null,
      };
  case POST_CONTACTS_ERROR:
      return { ...state, isLoading: false, error: action.error };
  default:
      return { ...state };
  }
}
