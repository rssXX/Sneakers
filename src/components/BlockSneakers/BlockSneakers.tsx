import React from 'react';
import {useSelector} from "react-redux";
import {selectSneakers} from "../../redux/sneakers/selector.ts";
import SneakersItem from "./SneakersItem.tsx";
import Sceleton from "./Sceleton.tsx";
import {Status} from "../../redux/sneakers/types.ts";
import { Pagination, Input } from 'antd';
import {useAppDispatch} from "../../redux/store.ts";
import {setSearch} from "../../redux/filter/slice.ts";

const { Search } = Input;

interface blockType {
    page: number,
    onChangePagination: any,
}

const BlockSneakers: React.FC<blockType> = ({ page, onChangePagination }) => {
    const {items, status} = useSelector(selectSneakers);
    const dispatch = useAppDispatch()

    const onSearch = (value: string) => dispatch(setSearch(value));

    if (status === Status.REJECT){
        return (
            <div>Роизошла ошибка</div>
        )
    }

    return (
        <div className="block-sneakers">
            <aside>
                <div className="header">
                    <h3 style={{ fontSize: "xx-large" }}>Кроссовки</h3>
                    <Search placeholder="Поиск" enterButton className="search" onSearch={onSearch} loading={status === Status.LOADING}/>
                </div>
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