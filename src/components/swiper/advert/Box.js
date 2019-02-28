import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = ({ road, pathname, comment, title, summary, image }) => (
    <ItemWrap className="swiper-slide">
        <Link to={`${road}/selected/${pathname}`}>
            <h5>{comment}</h5>
            <h3>{title}</h3>
            <p>{summary}</p>
            <img src={image} alt="" />
        </Link>
    </ItemWrap>
);

const ItemWrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        height: auto;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;

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

        & h5 {
            font-family: 'Noto sans KR';
            font-size: 0.7rem;
            font-weight: 300;
            margin-top: 0.5rem;
            color: darkslateblue;
        }

        & p {
            margin-bottom: 0.5rem;
            color: rgba(0, 0, 0, 0.4);
        }

        & img {
            display: block;
            /* width: 100%; */
            height: 100%;
            max-width: 100%;
            max-height: 220px;
            object-fit: cover;
            border-radius: 10px;
        }
    }
`;

export default Box;
