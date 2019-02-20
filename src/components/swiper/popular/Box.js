import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = ({ road, id, title, name, summary, icon }) => (
    <ItemWrap className="swiper-slide">
        {/* <h5>{title}</h5> */}
        {/* <h3>{name}</h3>
        <p>{summary}</p> */}
        {/* <img src={image} alt="" /> */}
        <Link to={`${road}/${id}`}>
            <div>
                <img src={icon} alt="" />
            </div>
        </Link>
    </ItemWrap>
);

const ItemWrap = styled.div`
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

export default Box;
