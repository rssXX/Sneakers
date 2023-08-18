import React from 'react';
import { Button } from 'antd';

interface cartProps {
    id: number,
    imageName: string,
    title: string,
    price: number,
    count: number,
    clickAdd: any,
    clickMinus: any,
}

const CartItem: React.FC<cartProps> = ({id, imageName, title, count, price, clickAdd, clickMinus }) => {
    return (
        <div className="cart-item">
            <div>
                <img src={`./img/sneakers/${imageName}`} alt={title}/>
            </div>
            <div>
                <p>{title}</p>
                <p>{price} руб.</p>
            </div>
            <div className="block-btn-plus-minus">
                <Button type="primary" shape="circle" danger onClick={() => clickMinus(id)} disabled={count <= 1 && true }>
                    -
                </Button>
                {count}
                <Button type="primary" shape="circle" onClick={() => clickAdd(id)}>
                    +
                </Button>
            </div>
            <div>
                <p>{price * count} руб.</p>
            </div>
        </div>
    );
}

export default CartItem;