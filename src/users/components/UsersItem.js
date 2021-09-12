import React from "react";
import { Link } from 'react-router-dom';

import './UsersItem.css';


const UsersItem = (props) => {

    return (
        <div className="user-item">
            <div className="user-item__content">
                <Link to={`/${props.id}/places`} style={{ textDecoration: 'none' }}>
                    <div className="user-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h3>{props.name}</h3>
                        <p>{props.places} {props.places === 1 ? 'place' : 'places'}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UsersItem;