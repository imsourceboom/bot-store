import React from 'react';
import Title from 'components/Title';

import styled from 'styled-components';
import { Search as SearchPlaceHolder } from 'styled-icons/boxicons-regular';

const Search = () => (
    <section>
        <Title>Search</Title>
        <Input>
            <SearchIcon size="22" />
            <input type="text" placeholder="Bot Store" />
        </Input>
        <Result>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
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

const Item = styled.li``;
const Result = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${Item} {
        width: 100%;
        height: 300px;
        margin-top: 1rem;
        border: 1px solid sandybrown;

        @media (min-width: 768px) {
            width: 49.25%;
        }
    }
`;

export default Search;
