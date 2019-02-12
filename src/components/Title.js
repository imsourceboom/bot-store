import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => (
    <Wrap>
        <h1>{children}</h1>
    </Wrap>
);

const Wrap = styled.article`
    padding: 2.5rem 0 0.5rem;

    & > h1 {
        font-size: 28px;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        @media (min-width: 768px) {
            & {
                font-size: 30px;
            }
        }
        @media (min-width: 1024px) {
            & {
                font-size: 32px;
            }
        }
        @media (min-width: 1440px) {
            & {
                font-size: 34px;
            }
        }
    }
`;

export default Title;
