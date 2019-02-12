import React from 'react';
import styled from 'styled-components';

const Card = ({ image, tag, title, summary }) => {
    return (
        <Box>
            <div className="media--wrap">
                <img src={image} alt="" />
            </div>
            <div className="content--wrap">
                <span className="tag">{tag}</span>
                <h1 className="title">{title}</h1>
                <p className="summary">{summary}</p>
            </div>
        </Box>
    );
};

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    margin: 2rem auto;
    border-radius: 10px;
    box-shadow: 1px 0 18px 0 rgba(0, 0, 0, 0.07), 0px 20px 32px 0 rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    overflow: hidden;

    & > .media--wrap {
        width: 100%;
        height: 75%;

        & > img {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 350px;
            object-fit: cover;

            @media (min-width: 768px) {
                & {
                    width: initial;
                }
            }
        }
    }

    & > .content--wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 25%;
        padding: 0 0 0 1rem;
        background-color: rgba(255, 255, 255, 1);

        & .tag,
        & .summary {
            color: rgba(0, 0, 0, 0.45);
        }

        & .tag {
            font-size: 13.5px;
            line-height: 1.1;
        }

        & .title {
            line-height: 1.3;
            padding-bottom: 0.15rem;
        }

        & .summary {
            font-size: 14px;
        }
    }
`;

export default Card;
