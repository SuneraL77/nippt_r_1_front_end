export const userReducer = (state = { user: null, token: null }, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        name: action.payload,
        token: null, // Clear token on logout
      };
    default:
      return state;
  }
};
