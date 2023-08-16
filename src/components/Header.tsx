import React from 'react';
import {Link} from "react-router-dom";
import {Divider} from "antd";

const Header: React.FC = () => {
    return (
        <header>
            <div className="wrapper">
                <div>
                    <Link to="/">
                        <h1>Sneakers</h1>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>Cart</li>
                        <li>User</li>
                    </ul>
                </nav>
            </div>
            <Divider className="divider"/>
        </header>
    );
}

export default Header;