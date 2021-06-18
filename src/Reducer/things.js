export const thingsReducer = (state = [] , action) => {
    switch (action.type) {
        case "ADD_THING":
            return [...action.payload];
        case "CHECKED":
            return [...action.payload];
        default:
            return state;
    }
}

export const dueDateReducer = (state = "",action) => {
    switch (action.type) {
        case "SET_DUEDATE":
            return action.payload;
        case "CLEAR_DUEDATE":
            return action.payload;
        default:
            return state;
    }
}
export const titleReducer = (state = "",action) => {
    switch (action.type) {
        case "SET_TITLE":
            return action.payload;
        case "CLEAR_TITLE":
            return action.payload;
        default:
            return state;
    }
}
export const singleThingReducer = (state = "",action) => {
    switch (action.type) {
        case "SET_SINGLETHING":
            return action.payload;
        case "CLEAR_SINGLETHING":
            return action.payload;
        default:
            return state;
    }
}

