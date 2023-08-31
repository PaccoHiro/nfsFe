export const handleSelect = (dispatch, e) => {
  dispatch({
    type: "SEL_CHANGE",
    payload: { name: e.target.name, value: e.target.value },
  });
};

export const updateGrpOrderRows = (dispatch, orderArray) => {
  dispatch({
    type: "ORDER_LIST_CHANGE",
    payload: orderArray,
  });
};
export const updateDiscountSelect = (dispatch, discObj) => {
  dispatch({
    type: "DISCOUNT_CHANGE",
    payload: discObj,
  });
};
export const handleShipSelect = (dispatch, e) => {
  dispatch({
    type: "SEL_SHIP_CHANGE",
    payload: { name: e.target.name, value: e.target.value },
  });
};
