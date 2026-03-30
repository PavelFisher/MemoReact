// import viteLogo from '/vite.svg'

// import {useState} from "react";
import Back from "../public/images/back.png"


export function Card({id, clicked, found, numberImg, onClick}: {
    id: number;
    clicked: boolean;
    found:boolean;
    numberImg: number;
    onClick: (id: number) => void;
}) {
    // let path = `../public/images/back.png`;
    if (clicked) {
    //     path = `../public/images/image${numberImg}.png`;
    }
    console.log(numberImg);


    const handleClick = () => {

        onClick(id);
    };
    if (found) {
        return (
            <button className="card-empty" disabled>
            </button>)
    } else {
        return (
            <button className="card" onClick={handleClick}>
                <img className="image" src={Back} alt="Icon"/>
            </button>)
    }
}

export default Card;
