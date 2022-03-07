import {testAPI} from "../../../../../tests/test5/src/api/api";

const SET_WORDS = "SET_WORDS"
let initialState = {
    words: []
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        default:
            return state;
    }
}

export const setWords = (words) =>({type:SET_WORDS, words})

export const requestWords = (word) => {
    return async (dispatch) => {
        let data = await testAPI.getWords(word);
        dispatch(setWords(data))

    }
}

export default testReducer;
