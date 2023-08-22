import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Sneakers} from "../redux/sneakers/types.ts";
import Loading from "../components/Loading.tsx";
import {Button, Image} from 'antd';
import {useAppDispatch} from "../redux/store.ts";
import {addItemCart} from "../redux/cart/slice.ts";
import {useSelector} from "react-redux";
import {selectCart} from "../redux/cart/selector.ts";

const FullSneakers: React.FC = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const itemCart = useSelector(selectCart)
    const [item, setItem] = React.useState<Sneakers>()
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        fetchSneaker()
    }, [id])

    async function fetchSneaker() {
        try {
            const {data} = await axios.get(`https://64c3ad1567cfdca3b66017c0.mockapi.io/sneakers?id=${id}`)
            // console.log(data)
            if (data[0]) {
                setItem(data[0])
                const findCart = itemCart.items.find(elem => elem.id === data[0].id)
                if (findCart){
                    setValue(findCart.count)
                }
            } else {
                errorNotification("Данного товара не существует")
            }
        } catch (err) {
            errorNotification("произошла ошибка")
        }
    }

    const errorNotification = (error: string) => {
        alert(error)
        navigate('/sneakers/')
    }

    const clickAddItem = () => {
        setValue(prev => prev + 1)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(addItemCart({id: item.id, price: item.price, imageName: item.imageName, title: item.title}))
    }


    return (
        <>
            {
                !item ? (
                    <Loading size={90}/>
                ) : (
                    <div className="sneakers">
                        <div className="left">
                            <Image
                                width={200}
                                src={`./img/sneakers/${item.imageName}`}
                            />
                        </div>
                        <div className="right">
                            <h3>{item.title}</h3>
                            <p>{item.price} руб.</p>
                            <p>{item.body}</p>
                            <Button type="primary" onClick={clickAddItem} style={{width: "150px", height: "35px"}}>
                                {
                                    value > 0 ? (
                                        <>
                                            Добавить
                                            <span style={{marginLeft: "10px", marginRight: "10px"}}>{value}</span>
                                        </>
                                    ) : (
                                        <>
                                            Купить
                                        </>
                                    )
                                }
                            </Button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default FullSneakers;