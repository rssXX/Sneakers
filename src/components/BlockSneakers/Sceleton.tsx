import React from 'react';
import { Skeleton as Sckelet } from 'antd';

const Sceleton: React.FC = () => {
    const active =  true

    return (
        <div className="card">
            <div>
                <Sckelet.Image active={active} style={{ width: "133px", height: "112px", borderRadius: "20px" }}/>
                <Sckelet.Button active={active} style={{ width: "133px" }}/>
            </div>
            <div>
                <Sckelet.Button active={active} style={{ width: "133px" }}/>
            </div>
        </div>
    );
}

export default Sceleton;