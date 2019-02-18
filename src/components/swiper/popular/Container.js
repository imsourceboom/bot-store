import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import params from '../params';

import styled from 'styled-components';

import Box from './Box';

import { game } from 'data';

const Container = () => {
    console.log(game.select);
    return (
        <SwiperWrap>
            <Swiper {...params}>
                {game.select.map((per, i) => (
                    <Box key={i} title={per.title} image={per.img} />
                ))}
            </Swiper>
        </SwiperWrap>
    );
};

const SwiperWrap = styled.article`
    position: relative;
    z-index: 0;
    /* padding: 1rem 0; */
    /* border-top: 1px solid rgba(0, 0, 0, 0.1); */

    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

export default Container;
