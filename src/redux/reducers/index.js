import {combineReducers} from 'redux';
import { userReducer, selectedUserReducer } from './userReducer';
import { albumsReducer, selectedAlbumReducer } from './albumsReducer';

const reducers = combineReducers ({
    allUsers: userReducer,
    user:selectedUserReducer,
    allAlbums: albumsReducer,
    album: selectedAlbumReducer,
})

export default reducers