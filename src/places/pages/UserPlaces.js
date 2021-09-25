import React from "react";
import { useParams } from "react-router";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1', 
        title:'Empire State Building',
        description:'One of famous sky scrapers in the wourld.One of famous sky scrapers in the wourld.',
        imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20200921030217_ap7Yk/png',
        address: '20 W 34th St, New York, NY 10001',
        location: {lat: 40.7484405, lng: -73.9878584},
        creator: 'u1'
    },
    {
        id: 'p1', 
        title:'Empire State Building',
        description:'One of famous sky scrapers in the wourld.One of famous sky scrapers in the wourld.',
        imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20200921030217_ap7Yk/png',
        address: '20 W 34th St, New York, NY 10001',
        location: {lat: 40.7484405, lng: -73.9878584},
        creator: 'u1'
    },
    {
        id: 'p1', 
        title:'Empire State Building',
        description:'One of famous sky scrapers in the wourld.One of famous sky scrapers in the wourld.',
        imageUrl: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20200921030217_ap7Yk/png',
        address: '20 W 34th St, New York, NY 10001',
        location: {lat: 40.7484405, lng: -73.9878584},
        creator: 'u1'
    },
    {
        id: 'p2', 
        title:'Brooklyn Bridge',
        description:'布魯克林大橋是當時曼哈頓和布魯克林間唯一的陸上通道。',
        imageUrl: 'https://a.bbkz.net/forum/spot/photos/192/photo_348.jpg?v=1417075680',
        address: 'Brooklyn Bridge, New York, NY 100381',
        location: {lat: 40.7060855, lng: -73.9968643},
        creator: 'u2'
    }
]

const UserPlaces =()=>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=>place.creator===userId);
    return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;