import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import params from '../params';

import styled from 'styled-components';

import Box from './Box';

import { game } from 'data';

const Container = ({ road }) => {
    return (
        <SwiperWrap>
            <Border />
            <HeadLine>
                <h2>
                    새롭게 추천하는
                    {road === '/game' ? ' 게임' : ' 봇'}
                </h2>
                <span>모두보기</span>
            </HeadLine>
            <Swiper {...params}>
                {game.suggest.intro.map((per, i) => {
                    return <Box road={road} key={i} per={per} />;
                })}
            </Swiper>
        </SwiperWrap>
    );
};

const SwiperWrap = styled.article`
    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

const Border = styled.div`
    margin: 0 auto;
    width: 90%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        width: 100%;
    }
`;

const HeadLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 5% 0;

    @media (min-width: 768px) {
        padding: 0.3rem 0 0;
    }

    span {
        font-size: 0.8rem;
        font-weight: 100;
        color: rgba(76, 103, 161, 1);
    }
`;

export default Container;
