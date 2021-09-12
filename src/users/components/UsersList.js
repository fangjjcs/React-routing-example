import React from "react";

import './UsersList.css';
import UsersItem from "./UsersItem";

const UsersList =(props)=>{
    if(props.items.length ===0){
        return (
            <div className="center">
                <h3>No users found.</h3>
            </div>
        );
    }

    return (
    <ul className="users-list">
        {
            props.items.map(user=>{
                return(<UsersItem 
                    key={user.id} 
                    id={user.id} 
                    image={user.image} 
                    name={user.name}
                    places={user.places} 
                />)
            })
        }
    </ul>
    )
}

export default UsersList;