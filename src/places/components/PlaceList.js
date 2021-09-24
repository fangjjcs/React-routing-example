import React from "react";

import PlaceItem from "./PlaceItem";
import './PlaceList.css';
const PlaceList = props =>{
    if(props.items.length===0){
        return <div className="place-list">
            <h2>No places found. Maybe create one?</h2>
            <button>Share place</button>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place=><PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} createId={place.creator} coordinates={place.location} />)}
    </ul>
}

export default PlaceList;