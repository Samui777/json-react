import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/userActions';
import UserCard from './UserCard';

const UserListing = ()=> {
    const users=useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .catch((err)=>{
                console.log("Err", err);
             });
        dispatch(setUsers(response.data));
    };

    useEffect(() => {
        fetchUsers();
    },[]);

    console.log("Users :", users);
    return(
        <div className="ui grid container">
            <UserCard />
        </div>
    )
}

export default UserListing