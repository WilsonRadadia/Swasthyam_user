export const initialState = {
  user: {},
  isSignedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user, isSignedIn: action.isSignedIn };

    default:
      return state;
  }
};
