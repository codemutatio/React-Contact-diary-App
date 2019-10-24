const contactReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_CONTACT':
        return state.concat([action.value]);
      default:
        return state;
    }
  }
  export default contactReducer;