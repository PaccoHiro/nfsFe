export const INIT_STATE = {};

export const newOrderReducer = (state, action) => {
  switch (action.type) {
    case "SEL_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      state; // or throw an error tbd
  }
};
