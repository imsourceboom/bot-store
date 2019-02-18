import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import styled from 'styled-components';

const List = () => {
    const params = {
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            767: {
                freeMode: false,
                centeredSlides: true
            }
        }
    };
    return (
        <SwiperWrap>
            <Swiper {...params}>
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
            </Swiper>
        </SwiperWrap>
    );
};

const SwiperWrap = styled.article`
    @media (max-width: 767px) {
        margin: 0 -1rem;
    }
`;

const Item = ({ children }) => {
    return (
        <ItemWrap className="swiper-slide">
            <span>섻션</span>
            {children}
        </ItemWrap>
    );
};

const ItemWrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        height: 300px;
        background-color: darkcyan;

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

export default List;
