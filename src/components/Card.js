import React from 'react';

const Card = ({id = null, name = "Name_Holder", email = "EMail_Holder"}) => {
    return(
        <div className = "tc grow bg-light-yellow br4 pa3 ma3 dib bw2 shadow-5">
            <img alt = "Image_Holder" src = {`https://robohash.org/${id}?size=200x200`}></img>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;