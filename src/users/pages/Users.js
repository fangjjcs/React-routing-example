import React from "react";

import UsersList from "../components/UsersList";
import './Users.css';

const Users = () => {

    const USERS = [
        {id: 'u1', name: 'Erina', image: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20490/20200921030217_ap7Yk/png', places: 3},
        {id: 'u2', name: 'Ian', image: 'https://a.bbkz.net/forum/spot/photos/192/photo_348.jpg?v=1417075680', places: 1},
        {id: 'u3', name: 'Crusiec', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4LgBOpU_aE2oAyLmmHamo5SJrXCpKzs26aukEec291AvSS6hnoP1Y1Y7Xb3fV09rEWs&usqp=CAU', places: 4},
        {id: 'u4', name: 'Taylor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0vZgo1ZXo-IXzjIRo_61sVTcnlTpyEf3p08_l3QjYVWJwEE8Ur3I2txi-sUkc9e9unU&usqp=CAU', places: 6},
        {id: 'u5', name: 'Benjimin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ThoVNaA79pNn-oWXRqZaiAPwEYfk09P99XieZBtoA_uHi_yVI26itJ4bFUQ1KMOb4V0&usqp=CAU', places: 2},
        {id: 'u6', name: 'Christopher', image: 'https://media.cntraveller.com/photos/611bf772db797d0116fd53a3/16:9/w_1024%2Cc_limit/mt-cook-south-island-new-zealand-gettyimages-100482504.jpg', places: 1}
    ]

    return (
        <div className="users-page">
            <UsersList items={USERS}/>
        </div>
        
    );
}

export default Users;