import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUser } from '../redux/actions/userActions';

const UserDetail = ()=> {
    const user = useSelector((state)=> state.user);
    const {name, email, website, phone} = user;
        const {userId} = useParams();
        const dispatch = useDispatch();
        console.log(userId);

        const fetchUserDetail = async () =>{
            const response = await axios
                .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .catch((err) => {
                console.log("ERR", err);
            });
            dispatch(selectedUser(response.data))
        };
        useEffect(()=>{
            if (userId && userId !== "") fetchUserDetail();
        }, [userId]);
    return(
        <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui list">
            <div className="item">
                <div className="content">
                <h1>{name}</h1>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <h2>{email}</h2>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <h3>{phone}</h3>
                </div>
            </div>
            <div className="item">
                <div className="content">
                    <h3>{website}</h3>
                </div>
            </div>
        </div>
      )}
    </div>
    )
}

export default UserDetail