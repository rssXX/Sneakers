import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Divider} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";

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
                        <NavLink to="/cart" >
                            <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                        </NavLink>
                        <li>User</li>
                    </ul>
                </nav>
            </div>
            <Divider className="divider"/>
        </header>
    );
}

export default Header;