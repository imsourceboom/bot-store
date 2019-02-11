import React from 'react';
import styled from 'styled-components';

const Card = ({ image }) => {
    return (
        <Box>
            <div>
                <img src={image} alt="" />
            </div>
            <div />
        </Box>
    );
};

const Box = styled.div`
    position: relative;
    width: 95%;
    height: 300px;
    margin: 2rem auto;
    border-radius: 10px;
    box-shadow: 1px 0 18px 0 rgba(0, 0, 0, 0.07), 0px 20px 32px 0 rgba(0, 0, 0, 0.03);
    overflow: hidden;

    & > div:first-child {
        width: 100%;
        height: 70%;

        & > img {
            width: 100%;
            max-width: 500px;
            height: 100%;
            object-fit: cover;
        }
    }

    & > div:last-child {
        bottom: 0;
        width: 100%;
        height: 30%;
        background-color: rgba(255, 255, 255, 1);
    }
`;

export default Card;
