import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import params from '../params';

import styled from 'styled-components';

import Box from './Box';

import { gamePopular } from 'data';

const Container = ({ road }) => {
    return (
        <SwiperWrap>
            <HeadLine>
                <h3>제작가 만든 다른 앱</h3>
                <span>모두보기</span>
            </HeadLine>
            <Swiper {...params}>
                {gamePopular.map((per, i) => {
                    return <Box road={road} key={i} per={per} />;
                })}
            </Swiper>
        </SwiperWrap>
    );
};

const SwiperWrap = styled.article`
    /* background-color: rgba(225, 245, 254, 1); */
    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

const HeadLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5% 0;

    @media (min-width: 768px) {
        padding: 1rem 0 0;
    }

    span {
        font-size: 0.8rem;
        font-weight: 100;
        color: rgba(76, 103, 161, 1);
        cursor: pointer;
    }
`;

export default Container;
