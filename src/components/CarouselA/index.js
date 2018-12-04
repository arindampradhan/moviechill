import React, { Component } from "react";
import './style.scss';
import Slider from "react-slick";
import styled from 'styled-components'
import getImage from '../../utils/images';
import MovieDetail from '../MovieDetail';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const CarouselCover = styled.div`
    background:  ${props => `url(${props.backdrop_path ? getImage.backdrop(props.backdrop_path): getImage.random()})`};;
    min-height: 125px;
    max-width: 210px;
    margin-right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    transition-timing-function: ease-in;

    /* Quick on the way out */
    transition: 0.2s;
    .title {
        font-weight: 500;
        height: 100%;
        color: white;
        text-align: center;
    }
`
function CarouselItem({ data }) {
    return (
        <CarouselCover backdrop_path={data.backdrop_path} className="row h-100">
            <div className="col-12">
                <div className="text-left text-danger text-body">MOVIECHILL</div>
                <div className="title align-self-center padding-t-20">
                    {data.title}
                </div>
            </div>
        </CarouselCover>
    )
}
/* eslint-disable no-func-assign */
CarouselItem = React.memo(CarouselItem)

CarouselItem.propTypes = {
    data: PropTypes.shape({
        backdrop_path: PropTypes.string,
        title: PropTypes.string.isRequired
    })
}

CarouselItem.defaultProps = {
    data: {
        backdrop_path: getImage.random()
    }
}

class Responsive extends Component {
    state = {
        hovered: false,
        current: null,
    }

    mouseEnter = (item, state) => {
        this.setState({ hovered: state, current: state ? item : null})
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                hovered: false
            });
        }
    }

    render() {
        var settings = {
            arrows: this.props.arrows,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,

            autoplay: this.props.autoplay,
            speed: 800,
            autoplaySpeed: 3200,
            cssEase: "ease-out",

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 968,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <React.Fragment>
                <Slider {...settings}>
                    {this.props.dataList.map((item, index) => (
                        <div
                            className="display-contents"
                            key={`carousel-${index}`}
                            onMouseEnter={() => this.mouseEnter(item, true)}
                            onClick={() => this.mouseEnter(item, !this.state.hovered)}  
                        >
                            <CarouselItem data={item} 
                            />
                        </div>
                    ))}
                </Slider>
                <div className="gap-10"></div>
                {this.props.showDetails ? (
                    <>
                        {this.state.hovered ? <MovieDetail {...this.state.current} /> : null}
                    </>
                ): null}
            </React.Fragment>
        );
    }
}

Responsive.propTypes = {
    dataList: PropTypes.array,
    arrows: PropTypes.bool,
    showDetails: PropTypes.bool,
    autoplay: PropTypes.bool
}

Responsive.defaultProps = {
    dataList: [],
    arrows: true,
    showDetails: true,
    autoplay: true,
}

export default Responsive;
