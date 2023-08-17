import React from 'react';
import {useSelector} from "react-redux";
import {selectSneakers} from "../../redux/sneakers/selector.ts";
import SneakersItem from "./SneakersItem.tsx";
import Sceleton from "./Sceleton.tsx";
import {Status} from "../../redux/sneakers/types.ts";
import { Pagination } from 'antd';

interface blockType {
    page: number,
    onChangePagination: any,
}

const BlockSneakers: React.FC<blockType> = ({ page, onChangePagination }) => {
    const {items, status} = useSelector(selectSneakers);

    if (status === Status.REJECT){
        return (
            <div>Роизошла ошибка</div>
        )
    }

    return (
        <div className="block-sneakers">
            <aside>
                <h3>Кроссовки</h3>
                <div className="cards">
                    {
                        status === Status.LOADING ? (
                            [...new Array(4)].map((_, index) => {
                                return <Sceleton key={`scelet ${index}`}/>
                            })
                        ):(
                            items.map(item => {
                                return <SneakersItem
                                    key={item.id}
                                    id={item.id}
                                    imageName={item.imageName}
                                    title={item.title}
                                    price={item.price}
                                />
                            })
                        )
                    }
                </div>
                <Pagination defaultCurrent={page} total={30} onChange={onChangePagination} />
            </aside>
        </div>
    );
}

export default BlockSneakers;