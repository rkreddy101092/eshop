import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselSlider from "react-carousel-slider"

export default class HomePage extends Component {
    render() {
        const { banners, categories } = this.props;
        return (
            <div>
                <Slider banners={banners} />
                <div style={{ margin: 20 }}>
                    <div>
                        <span style={{ color: '#000', fontSize: 22 }}>Top Categories</span>
                    </div>
                    <Categories categories={categories} />
                </div>
                <div style={{ margin: 20 }}>
                    <div>
                        <span style={{ color: '#000', fontSize: 22 }}>Gallery</span>
                    </div>
                    <Gallery categories={categories} />
                </div>
            </div>
        )
    }
}


class Slider extends Component {
    render() {
        const { banners } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <AwesomeSlider style={{ height: '40vh' }} bullets={false}>
                    {banners.map((item, index) => {
                        return (
                            <div key={index}>
                                <img style={{ width: '100vw', height: '40vh', objectFit: 'cover' }} src={item} />
                            </div>
                        )
                    })}
                </AwesomeSlider>
            </div>
        )
    }

}

class Categories extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                {categories.map((item, index) => {
                    return (
                        <div>
                            <img key={index} style={{ width: '12vw', height: '12vw', objectFit: 'cover', marginRight: 10, borderRadius: 8 }} src={item.image} />
                        </div>
                    )
                })}

            </div>
        )
    }
}

class Gallery extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                {categories.map((item, index) => {
                    return (
                        <div style={{ flex: '0 33%', padding: 10 }}>
                            <img key={index} style={{ width: 'auto', height: 'auto', objectFit: 'contain', }} src={item.image} />
                        </div>
                    )
                })}
            </div>
        )
    }
}