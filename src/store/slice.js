// authSlice.js
const initialState = {
    isAuthenticated: false,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    console.log('action: ', action);
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: action?.isAuthenticated , user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
