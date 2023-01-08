import React from 'react';
import Japan from '../assets/image/JAPAN.PNG';
import Qatar from '../assets/image/QATAR.PNG';
import Tunisia from '../assets/image/TUNISIA.PNG';
import France from '../assets/image/FRANCE.PNG';

export default function Card({ name, color, setQuery, setImage}) {

    const handleClick = ()=>{
        setQuery(name);
        if(name.toLowerCase() === "japan") {
            setImage(Japan);
        }
        else if(name.toLowerCase() === "qatar") {
            setImage(Qatar);
        }
        else if(name.toLowerCase() === "tunisia") {
            setImage(Tunisia);
        }
        else if(name.toLowerCase() === "france") {
            setImage(France);
        }
    }

    return (
        <div className='country-card' style={{ backgroundColor: `${color}` }} onClick={handleClick}>{name}</div>
    )
}
