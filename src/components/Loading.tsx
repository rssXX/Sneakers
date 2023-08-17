import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

const Loading: React.FC<{ size: number }> = ({size}) => {
    const antIcon = <LoadingOutlined style={{fontSize: size}} spin/>;

    return (
        <div style={{textAlign: "center", marginTop: "150px"}}>
            <Spin indicator={antIcon}/>
        </div>)
}

export default Loading;