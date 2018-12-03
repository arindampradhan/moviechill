import React , {Component} from 'react';
import './style.scss';
import Slider from "react-slick";
import example from './example.json';
import getImage from '../../utils/images';
import {Link} from 'react-router-dom';


class Cast extends Component {
    state = {
        choose : "a"
    }
  render() {
    const { cast, crew } = this.props
    return (
        <div className="container">
            <div className="Cast">
                <h1 className="heading-text text-warning">Cast</h1>
                <h3 className="text-warning">THE TEAM</h3>
                {this.state.choose === 'a' ? <CenterMode cast={cast} /> : <CenterMode cast={crew} />}
                <div className='padding-t-30'>
                    <h5 className="text-center">
                        <button className="btn btn-link font-size-36" onClick={() => this.setState({choose: 'a'})}>Cast</button> | 
                        <button className="btn btn-link font-size-36" onClick={() => this.setState({ choose: 'b' })}>Crew</button>
                    </h5>
                </div>
            </div>
        </div>
    )
  }
}


class CenterMode extends Component {
    render() {
        const settings = {
            // arrows: false,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
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
            <div>
                <Slider {...settings}>
                    {this.props.cast.map((item,index)=> (
                        <ActorItem {...item} key={`actor-${index}`} />
                    ))}
                </Slider>
            </div>
        );
    }
}

function ActorItem({ character, profile_path, name, id}) {
    return (
        <div className="actor row">
            <div className="col-1">
            <Link to={`/person/${id}`}>
                <h4 className="actor-name">{name}</h4>
            </Link>
            </div>
            <div className="col-11">
                <img className="img-fluid" alt={name} src={getImage.backdrop(profile_path) || '/images/blur.jpg'}></img>
            </div>
        </div>
    )
}

export default Cast;
