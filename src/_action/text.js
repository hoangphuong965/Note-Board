import { v4 as uuidv4 } from 'uuid';

export const addText = ({ text = '', count = 0 } = {}) => {
    return {
        type: "ADD_TEXT",
        payload: {
            id: uuidv4(),
            count,
            text
        }
    };
};

export const removeText = ({ id } = {}) => {
    console.log(id);
    return {
        type: "REMOVE_TEXT",
        id
    };
};

export const editText = (id, update) => {
    console.log(update);
    return {
        type: "EDIT_TEXT",
        id,
        update
    };
};





