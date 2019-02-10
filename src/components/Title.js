import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => (
    <Wrap>
        <h1>{children}</h1>
    </Wrap>
);

const Wrap = styled.article`
    padding: 3rem 0;
`;

export default Title;
