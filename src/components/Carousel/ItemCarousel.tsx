import React from 'react';
import { Row, Col, Button } from "antd";

interface SneakersCarousel {
    id: number,
    imageName: string,
    title: string,
    brand: string,
    price: number,
}

const ItemCarousel: React.FC<SneakersCarousel> = ({id, imageName, title, price, brand}) => {
    return (
        <div className="carousel-item">
            <Row>
                <Col span={12} className="carousel-item-right">
                    <span>{brand}</span>
                    <h3>{title}</h3>
                    <p className="price">{price}<span style={{ fontSize: '20px', marginLeft: '5px' }}>₽</span></p>
                    <Button type="primary" danger style={{ height: '50px', background: "green" }}>
                        В корзину
                    </Button>
                </Col>
                <Col span={12} className="carousel-item-left">
                    <img src={`img/sneakers/${imageName}`} alt={title} />
                </Col>
            </Row>
        </div>
    );
}

export default ItemCarousel;