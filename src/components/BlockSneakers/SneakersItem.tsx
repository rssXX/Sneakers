import React from 'react';
import {Link} from "react-router-dom";

interface itemProps {
    id: number,
    imageName: string,
    title: string,
    price: number,
}

const SneakersItem: React.FC<itemProps> = ({id, imageName, title, price }) => {


    return (
        <Link to={`/sneakers/${id}`}>
            <div className="card">
                <div>
                    <img src={`./img/sneakers/${imageName}`} alt={title}/>
                    <p className="title">{title}</p>
                </div>
                <div>
                    <p>
                        <strong>Цена: </strong>
                        <span className="price">{price} руб.</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default SneakersItem;