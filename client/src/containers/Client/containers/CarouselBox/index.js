import React, { Component } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PlaceHolderImage from './img/palceholder.jpg';

import './style.css';

export default class CarouselBox extends Component {
    static propTypes = {
        carousel: PropTypes.array.isRequired,
    }

    static defaultProps = {
        carousel: [
            {
                img: PlaceHolderImage,
                articleLinkId: '',
                articleTitle: '这是一个占位图片'
            }
        ]
    }

    genCarouseList = cList => cList.map((l) => {
        return (
            <div className="carousel-img" key={l.articleLinkId}>
                {
                    l.articleLinkId ? (
                        <Link to={`/secondPage/news/NewsMenu:${l.articleLinkId}`}>
                            <img src={l.img} alt={l.articleTitle} />
                            <p className="carousel-title">{l.articleTitle}</p>
                        </Link>
                    ) : (
                        <div>
                            <img src={l.img} alt={l.articleTitle} />,
                            <p className="carousel-title">{l.articleTitle}</p>
                        </div>
                    )
                }
            </div>
        )
    })

    render() {
        const { carousel } = this.props;
        return (
            <div className='Carousel'>
                <Carousel autoplay>
                    {this.genCarouseList(carousel)}
                </Carousel>
            </div>
        )
    }

}