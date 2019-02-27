import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = ({ road, pathname, comment, title, summary, image }) => (
    <>
        <ItemWrap className="swiper-slide">
            {/* <Link to={`${road}/${pathname}`}>
            <h5>{comment}</h5>
            <h3>{title}</h3>
            <p>{summary}</p>
            <img src={image} alt="" />
        </Link> */}
            <img src="https://toss.im/new_assets/p1_screen02.png" alt="" />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img
                src="http://a5.mzstatic.com/eu/r30/Purple122/v4/e5/ea/49/e5ea4971-1a5a-79f4-f635-16d136c6c5e4/screen696x696.jpeg"
                alt=""
            />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img
                src="http://a4.mzstatic.com/us/r30/Purple62/v4/65/9f/1a/659f1a3f-b5b3-90c1-815c-2f8a20a5b81c/screen696x696.jpeg"
                alt=""
            />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img src="https://toss.im/new_assets/p1_screen03.png" alt="" />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img src="https://toss.im/new_assets/insurance_1.png" alt="" />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img src="https://toss.im/new_assets/credit_2.png" alt="" />
        </ItemWrap>
        <ItemWrap className="swiper-slide">
            <img src="https://toss.im/new_assets/insurance_2.png" alt="" />
        </ItemWrap>
    </>
);

const ItemWrap = styled.div`
    &.swiper-slide {
        max-width: 200px;
        /* height: auto; */
        /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
        /* margin-bottom: 2rem; */

        &:first-child {
            margin-left: 1rem;
        }
        &:last-child {
            margin-right: 1rem;
        }

        @media (min-width: 768px) {
            & {
                max-width: 200px;

                &:first-child {
                    margin-left: initial;
                }
                &:last-child {
                    margin-right: initial;
                }
            }
        }

        & img {
            display: block;
            /* width: 100%;
            height: 100%; */
            max-width: 200px;
            /* max-height: 220px; */
            object-fit: contain;
            border-radius: 10px;
        }
    }
`;

export default Box;
