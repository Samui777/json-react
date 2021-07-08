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
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src="#" />
              </div>
              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <a className="ui teal tag label">${email}</a>
                </h2>
                <h3 className="ui brown block header">{website}</h3>
                <p>{phone}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}

export default UserDetail