import React from 'react';
import {Row, Col} from "antd";

interface SneakersCarouselProps {
    id: number,
    imageName: string,
    title: string,
    brand: string,
    price: number,
    clickCarouselItem: any,
}

const ItemCarousel: React.FC<SneakersCarouselProps> = ({id, imageName, title, price, brand, clickCarouselItem}) => {
    return (
        <Row className="carousel-item">
            <Col span={12} className="carousel-item-left">
                <span>{brand}</span>
                <h3>{title}</h3>
                <p className="price">{price}<span style={{fontSize: '20px', marginLeft: '5px'}}>₽</span></p>
            </Col>
            <Col span={12} className="carousel-item-right">
                <img src={`img/sneakers/${imageName}`} alt={title} onClick={() => clickCarouselItem(id)}/>
            </Col>
        </Row>
    );
}

export default ItemCarousel;