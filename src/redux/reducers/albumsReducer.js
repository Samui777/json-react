import { ActionTypes } from "../constants/action-types";

const initialState ={
    albums: [],
};

export const albumsReducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ALBUMS:
            return {...state, albums: payload};
        default:
            return state
    }
};

export const selectedAlbumReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_ALBUM:
            return { ...state, ...payload};
        default:
            return state;
    }
}

