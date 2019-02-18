import React from 'react';
import styled from 'styled-components';

const Box = ({ title, image }) => (
    <ItemWrap className="swiper-slide">
        <h2>{title}</h2>
        <img src={image} alt="" />
    </ItemWrap>
);

const ItemWrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        height: 300px;
        background-color: darkmagenta;

        &:first-child {
            margin-left: -2%;
        }
        &:last-child {
            margin-right: -2%;
        }

        @media (min-width: 768px) {
            & {
                max-width: 350px;

                &:first-child {
                    margin-left: initial;
                }
                &:last-child {
                    margin-right: initial;
                }
            }
        }

        & img {
            width: 100%;
        }
    }
`;

export default Box;
