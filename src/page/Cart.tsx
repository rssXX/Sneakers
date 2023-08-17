import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../redux/cart/selector.ts";
import {Button} from "antd";
import {useAppDispatch} from "../redux/store.ts";
import {clearCart, minusCountItemCart, plusCountItemCart} from "../redux/cart/slice.ts";
import CartItem from "../components/CartItem.tsx";

const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const {items} = useSelector(selectCart)
    console.log(items)

    const clickAdd = (id: number) => {
        dispatch(plusCountItemCart(id))
    }
    const clickMinus = (id: number) => {
        dispatch(minusCountItemCart(id))
    }
    const clickClear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <div>
                <h2>Корзина</h2>
                <Button onClick={clickClear}>Очистить корзину</Button>
            </div>
            <div className="list-cart">
                {
                    items.length >= 1 ? (
                        items.map(item => {
                            return (
                                <CartItem
                                    key={`cart item ${item.id}`}
                                    id={item.id}
                                    title={item.title}
                                    imageName={item.imageName}
                                    count={item.count}
                                    price={item.price}
                                    clickAdd={clickAdd}
                                    clickMinus={clickMinus}
                                />
                            )
                        })
                    ) : (
                        <p>Корзина пустая</p>
                    )
                }
            </div>
            <Button type="primary" style={{backgroundColor: "green"}}>
                Купить
            </Button>
        </div>
    );
}

export default Cart;