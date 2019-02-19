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
            <Swiper {...params}>
                {game.select.map((per, id) => (
                    <Box
                        road={road}
                        id={id}
                        key={id}
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
    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

export default Container;
