import React from 'react';
import styled from 'styled-components';

const Box = ({ title, name, summary, image }) => (
    <ItemWrap className="swiper-slide">
        <h5>{title}</h5>
        <h3>{name}</h3>
        <div>{summary}</div>
        <img src={image} alt="" />
    </ItemWrap>
);

const ItemWrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        /* height: 300px; */
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        background-color: rgba(179, 208, 233, 0.5);

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
            border-radius: 10px;
        }
    }
`;

export default Box;
