import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/userActions';
import UserCard from './UserCard';

const AlbumsListing = ()=> {
    const albums=useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchAlbums = async () => {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .catch((err)=>{
                console.log("Err", err);
             });
        dispatch(setAlbums(response.data));
    };

    useEffect(() => {
        fetchAlbums();
    },[]);

    console.log("Albums :", albums);
    return(
        <div className="ui grid container">
            <AlbumsDetail />
        </div>
    )
}

export default AlbumsListing