import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserCard = ()=> {
    const users = useSelector((state)=>state.allUsers.users);
    const renderList = users.map((users) => {
        const {id, name, username, email} = users;

        return (
            <div className="four wide column" key={id}>
                <Link to={`/users/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image"></div>
                            <div className="content">
                                <div className="header">{name}</div>use
                                <div className="meta">{email}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return(
    <>{renderList}</>
    );
}

export default UserCard