import React from 'react';
import './style.scss';
import styled from 'styled-components'

export function AgeIcon({age}) {
    return (
        <span className="age--icon text-white">
            {age} <i className="fas fa-plus"></i>
        </span>
    )
}

export function Label({ children }) {
    return (
        <span className="age--icon text-white">
            {children}
        </span>
    )
}

export function TogglerView({onList, onCarousel}) {
    return (<div className="toggler-view">
        <i className="fas fa-grip-horizontal" onClick={onCarousel}></i>
        <i className="fas fa-bars" onClick={onList}></i>
    </div>)
}

const DisDiv = styled.div`
  min-height: 125px;
  object-fit: contain;
  background-image: ${(props) => {return props.gradient}};
  margin-bottom: 20px;
  color: white;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 20%;
`

export function DiscoverDiv({children, gradient}) {
    return (
        <DisDiv gradient={gradient}>
            {children}
            <div>
            <i className="fas fa-chevron-down"></i>
            </div>
        </DisDiv>
    )
}

export default AgeIcon;
