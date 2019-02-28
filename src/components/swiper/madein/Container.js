import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import params from '../params';

import styled from 'styled-components';

import Box from './Box';

import { gamePopular } from 'data';

const Container = ({ road }) => {
    return (
        <Wrap>
            <Swiper {...params}>
                {gamePopular.map((per, i) => {
                    return <Box road={road} key={i} per={per} />;
                })}
            </Swiper>
        </Wrap>
    );
};

const Wrap = styled.article`
    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

export default Container;
