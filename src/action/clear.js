export const clear = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_DUEDATE", payload: "" });
    await dispatch({ type: "CLEAR_SINGLETHING", payload: "" });
    await dispatch({ type: "CLEAR_TITLE", payload: "" });
  };
};
