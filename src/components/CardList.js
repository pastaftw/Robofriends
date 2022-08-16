import React from "react";
import Card from "./Card";

const CardList = ({Database}) => {
    return (Database.map((item, index) => {
        return(<Card key = {index} id = {item.id} name = {item.name} email = {item.email}/>)
    }));
}

export default CardList;