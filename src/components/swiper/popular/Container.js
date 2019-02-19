import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import params from '../params';

import styled from 'styled-components';

import Box from './Box';

import { game } from 'data';

const Container = () => {
    return (
        <SwiperWrap>
            <Border />
            <Swiper {...params}>
                {game.popular.map((per, i) => (
                    <Box
                        key={i}
                        title={per.title}
                        name={per.name}
                        summary={per.summary}
                        image={per.img}
                    />
                ))}
            </Swiper>
        </SwiperWrap>
    );
};

const SwiperWrap = styled.article`
    /* padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1); */

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

export default Container;
