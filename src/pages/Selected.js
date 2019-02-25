import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material';
import posed from 'react-pose';

import { data } from 'data';

const Selected = props => {
    const back = () => props.history.goBack();
    const [trigger, setTrigger] = useState(false);
    const selectedData = data.filter(v => v.pathname === props.match.params.selected);

    return (
        <ContainerPose id="overlay">
            <Header>
                <BackArrow size="38" />
                <h3 onClick={back}>뒤로가기 {props.match.params.selected}</h3>
            </Header>
            <Content>
                <Top>
                    <img src={selectedData[0].icon} alt="" />
                    <div>
                        <p>{selectedData[0].title}</p>
                        <span>{selectedData[0].summary}</span>
                    </div>
                </Top>
                <span onClick={() => setTrigger(!trigger)}>버튼이라고 치자</span>
                {trigger && <h2>햐이</h2>}
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

const BackArrow = styled(KeyboardArrowLeft)``;
const Header = styled.header`
    ${Layout};
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    background-color: rgba(255, 255, 255, 1);

    @media (min-width: 768px) {
        padding: 1rem 0;
    }

    ${BackArrow} {
        color: rgba(205, 197, 197, 1);
    }

    h3 {
        line-height: initial;
        margin-top: -5px;
    }
`;

const Top = styled.div``;
const Content = styled.div`
    ${Layout}
    padding:0 1rem 60px;

    ${Top} {
        display: flex;

        img {
            width: 100%;
            height: 100%;
            max-width: 100px;
            max-height: auto;
            object-fit: contain;
            border-radius: 22.5%;

            @media (min-width: 768px) {
                max-width: 150px;
            }
        }

        & > div {
            padding-left: 1rem;

            @media (min-width: 768px) {
                padding-left: 2rem;
            }

            p {
                font-size: 1rem;
                font-weight: 700;

                @media (min-width: 768px) {
                    font-size: 1.4rem;
                }
            }

            span {
                color: rgba(203, 196, 196, 1);
                font-size: 0.8rem;

                @media (min-width: 768px) {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export default Selected;
