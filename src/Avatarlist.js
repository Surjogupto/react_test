import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avtarstyle ma4 bg-light-purple dib pa3 tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avtar"/>
            <h1 className="">{props.name}</h1>
            <p>{props.work}</p>
        </div>    
    )
}

export default Avatarlist