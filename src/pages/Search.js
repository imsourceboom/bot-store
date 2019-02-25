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
    position: relative;
    display: block;
    height: 2.5rem;

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

export default Search;
