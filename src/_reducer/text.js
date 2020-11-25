
const textReducerDefault = [];

const textReducer = (state = textReducerDefault, action) => {
    switch (action.type) {
        case "ADD_TEXT":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_TEXT":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_TEXT":
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.update
                    };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};
export default textReducer;