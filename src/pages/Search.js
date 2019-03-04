import React from 'react';
import Title from 'components/Title';

import styled from 'styled-components';
import { Search as SearchPlaceHolder } from 'styled-icons/boxicons-regular';

import { data } from 'data';

const Search = () => (
    <section>
        <Title>Search</Title>
        <Input>
            <SearchIcon size="22" />
            <input type="text" placeholder="Bot Store" />
        </Input>
        <Result>
            {data
                .filter((v, i) => i < 20)
                .map((each, i) => (
                    <Item key={i}>
                        <img src={each.icon} alt="" />
                        <div>
                            <h4>{each.title}</h4>
                            <p>{each.summary}</p>
                        </div>
                        <button type="button">열기</button>
                        <figure>
                            <img src="https://toss.im/new_assets/p1_screen03.png" alt="" />
                            <img src="https://toss.im/new_assets/insurance_1.png" alt="" />
                            <img src="https://toss.im/new_assets/credit_2.png" alt="" />
                        </figure>
                    </Item>
                ))}
        </Result>
    </section>
);

const SearchIcon = styled(SearchPlaceHolder)`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: rgba(191, 183, 183, 1);
`;

const Input = styled.label`
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0.5rem 0;
    display: block;
    background-color: rgba(255, 255, 255, 1);

    @media (min-width: 768px) {
        padding: 1rem 0;
    }

    input {
        width: 100%;
        font-size: 1rem;
        line-height: 2.5;
        height: 2.5rem;
        padding: 0 1rem 0 3rem;
        background-color: rgba(248, 243, 243, 1);
        border: none;
        border-radius: 10px;

        &::-webkit-input-placeholder {
            color: rgba(191, 183, 183, 1);
        }

        &::-ms-input-placeholder {
            color: rgba(191, 183, 183, 1);
        }

        &::-moz-placeholder {
            color: rgba(191, 183, 183, 1);
        }
    }
`;

const Result = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0 2rem;
    width: 100%;

    @media (min-width: 768px) {
        width: 48%;
    }

    & > img {
        display: block;
        /* width: 100%; */
        /* height: 100%; */
        max-width: 65px;
        /* max-height: 100%; */
        object-fit: contain;
        border-radius: 22.5%;

        @media (min-width: 768px) {
            max-width: 70px;
        }
    }

    & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding-left: 1rem;

        h4 {
            display: inline-block;
            width: 100%;
            max-width: 190px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.4);
            display: inline-block;
            width: 100%;
            max-width: 190px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            line-height: 1.2;
            height: 2rem;
            text-align: left;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    button {
        width: 65px;
        height: 25px;
        line-height: 25px;
        background-color: rgba(245, 245, 245, 1);
        color: rgba(71, 144, 181, 1);
        font-size: 0.8rem;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;

        img {
            width: 32%;
            height: 100%;
            border-radius: 4px;
        }
    }
`;

export default Search;
