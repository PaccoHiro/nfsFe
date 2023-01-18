export const INIT_STATE = {};
const shipArray = { ShipperA: 10, ShipperB: 20, ShipperC: 30 };

export const newOrderReducer = (state, action) => {
  switch (action.type) {
    case "SEL_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ORDER_LIST_CHANGE":
      return {
        ...state,
        orderList: action.payload,
      };
    case "SEL_SHIP_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        shipCost: shipArray[action.payload.value],
      };
    default:
      state; // or throw an error tbd
  }
};
