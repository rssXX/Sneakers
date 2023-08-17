import React from 'react';
import {cartSneaker} from "../redux/cart/types.ts";
import { Button } from 'antd';

const CartItem: React.FC<cartSneaker> = ({id, imageName, title, count, price}) => {
    return (
        <div className="cart-item">
            <div>
                <img src={`/img/sneakers/${imageName}`} alt={title}/>
            </div>
            <div>
                <p>{title}</p>
                <p>{price} руб.</p>
            </div>
            <div className="block-btn-plus-minus">
                <Button type="primary" shape="circle" danger>
                    +
                </Button>
                {count}
                <Button type="primary" shape="circle">
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