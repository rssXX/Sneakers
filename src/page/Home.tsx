import React, {useEffect} from 'react'
import BlockSneakers from "../components/BlockSneakers/BlockSneakers.tsx";
import {fetchSneaker} from "../redux/sneakers/asyncActions.ts";
import {useAppDispatch} from "../redux/store.ts";
import {useSelector} from "react-redux";
import {selectFilter} from "../redux/filter/selector.ts";
import type { PaginationProps } from 'antd';
import {setPage} from "../redux/filter/slice.ts";

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { page} = useSelector(selectFilter);

    const getSneakers = async () => {
        dispatch(fetchSneaker({ page }))
    }

    useEffect(() => {
        getSneakers()
    }, [page])

    const onChange: PaginationProps['onChange'] = (page) => {
        dispatch(setPage(page))
    };

    return (
        <div>
            <BlockSneakers page={page} onChangePagination={onChange} />
        </div>
    )
}

export default Home