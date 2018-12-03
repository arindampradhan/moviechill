import React, { Component } from "react";
import './style.scss';
import Slider from "react-slick";
import styled from 'styled-components'
import getImage from '../../utils/images';
import MovieDetail from '../MovieDetail';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const CarouselCover = styled.div`
    background:  ${props => `url(${getImage.backdrop(props.backdrop_path)})`};;
    min-height: 125px;
    max-width: 210px;
    margin-right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

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
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
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
                {this.state.hovered ? <MovieDetail {...this.state.current} />: null}
            </React.Fragment>
        );
    }
}

Responsive.propTypes = {
    dataList: PropTypes.array,
    arrows: true,
}

Responsive.defaultProps = {
    dataList: []
}

export default Responsive;
