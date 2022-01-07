export const AppReducer = (state, action) => {
  switch (action.type) {

    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
        loading:false
      }

    default:
      return state;
  }
};
