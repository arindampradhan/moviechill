import React from 'react';
import DefaultPage from '../../components/Loader/index'
import styled from 'styled-components';
import getImage from '../../utils/images';
import Header from '../../components/Header'

const CoverWrapper = styled.div`
    background: url(${getImage.random()});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`
const Cover = styled.div`
    background-image: linear-gradient(to left, #43434348 0%, rgba(255, 7, 7, 0.397) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`

 

function Example() {
    return (
        <>
            <Header/>
            <CoverWrapper>
                <Cover>
                    <DefaultPage/>
                </Cover>
            </CoverWrapper>
        </>
    )
}

export default Example;
