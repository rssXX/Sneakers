import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../redux/cart/selector.ts";
import { List, Button } from "antd";

const Cart: React.FC = () => {
    const { items} = useSelector(selectCart)
    console.log(items)
    return (
        <div>
            <div>
                <h2>Корзина</h2>
                <Button>Очистить корзину</Button>
            </div>
            <List
                itemLayout="horizontal"
                dataSource={items}
                renderItem={(item, index) => (
                    <List.Item>
                        <img src={`/img/sneakers/${item.imageName}`} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button>-</button>
                        <span>{item.count}</span>
                        <button>+</button>
                        <p>{item.price * item.count}</p>
                    </List.Item>
                )}
            />
            <Button type="primary" style={{ backgroundColor: "green" }}>
                Купить
            </Button>
        </div>
    );
}

export default Cart;