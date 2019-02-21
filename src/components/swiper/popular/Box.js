import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = ({ road, per }) => (
    <Wrap className="swiper-slide">
        {per.map((each, i) => (
            <Link to={`${road}/${each.pathname}`} key={i}>
                <Item>
                    <img src={each.icon} alt="" />
                    <div>
                        <h4>{each.title}</h4>
                        <p>{each.summary}</p>
                        <button>열기</button>
                    </div>
                </Item>
            </Link>
        ))}
    </Wrap>
);

const Wrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        height: auto;
        /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
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
    }
`;

const Item = styled.div`
    display: flex;
    padding-top: 1rem;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 90px;
        max-height: 100%;
        object-fit: contain;
        border-radius: 22.5%;

        @media (min-width: 768px) {
            max-width: 100px;
        }
    }

    & > div {
        position: relative;
        padding-left: 1rem;

        p {
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.4);
        }

        button {
            position: absolute;
            bottom: 0;
            width: 65px;
            height: 25px;
            background-color: rgba(245, 245, 245, 1);
            color: rgba(71, 144, 181, 1);
            font-size: 0.8rem;
            border-radius: 20px;
            border: none;
        }
    }
`;

export default Box;
