import React from 'react';
// import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material';
import posed from 'react-pose';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { data } from 'data';

export default props => {
    const back = () => props.history.goBack();
    // const [trigger, setTrigger] = useState(false);
    // const selectedData = data.filter(v => v.pathname === props.match.params.selected);

    return (
        <ContainerPose id="overlay">
            <Header>
                <Back onClick={back}>
                    <BackArrow size="38" />
                    뒤로가기
                </Back>
                <Title>
                    {props.match.url.indexOf('/bot') === 0 ? (
                        <div>
                            {props.match.params.whatview === 'popular' ? '인기 ' : '추천 '}
                            Bot
                        </div>
                    ) : (
                        <div>
                            {props.match.params.whatview === 'popular' ? '인기 ' : '추천 '}
                            Game
                        </div>
                    )}
                </Title>
            </Header>
            <Content>
                <List>
                    {data.map((per, i) => {
                        if (i < 20) {
                            return (
                                <li key={i}>
                                    <img src={per.icon} alt="" />
                                    <div>
                                        <h4>{per.title}</h4>
                                        <p>{per.summary}</p>
                                        <button type="button">열기</button>
                                    </div>
                                </li>
                            );
                        }
                    })}
                </List>
            </Content>
        </ContainerPose>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(255, 255, 255, 1);
`;

const ContainerPose = posed(Container)({
    enter: { x: 0 },
    exit: { x: '100%' }
});

const Layout = css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
`;

const Back = styled.h3``;
const BackArrow = styled(KeyboardArrowLeft)``;
const Title = styled.h3``;
const Header = styled.header`
    ${Layout};
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    background-color: rgba(255, 255, 255, 1);

    @media (min-width: 768px) {
        padding: 1rem 0;
    }

    ${Back} {
        /* ${BackArrow} */
        /* line-height: initial;
        margin-top: -5px; */
        cursor: pointer;
        color: rgba(71, 144, 181, 0.8);
        transition: 0.5s;

        &:hover {
            color: rgba(71, 144, 181, 1);
        }
    }

    ${Title} {
        line-height: initial;
        margin-top: -3px;
        position: absolute;
        right: 1rem;

        @media(min-width: 768px) {
            right: 50%;
            transform:translateX(50%);
        }
    }
`;

const Content = styled.section`
    ${Layout}
    padding:0 1rem 60px;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        display: flex;
        width: 100%;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        @media (min-width: 768px) {
            width: 49%;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            max-width: 90px;
            object-fit: contain;
            border-radius: 22.5%;
        }

        div {
            flex: 1;
            position: relative;
            padding-left: 1rem;

            h4 {
                display: inline-block;
                width: 100%;
                max-width: 231px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            p {
                font-size: 0.8rem;
                color: rgba(0, 0, 0, 0.4);
                display: inline-block;
                width: 100%;
                max-width: 231px;
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

            button {
                position: absolute;
                bottom: 0;
                width: 65px;
                height: 25px;
                line-height: 25px;
                background-color: rgba(245, 245, 245, 1);
                color: rgba(71, 144, 181, 1);
                font-size: 0.8rem;
                border-radius: 20px;
                border: none;
            }
        }
    }
`;
