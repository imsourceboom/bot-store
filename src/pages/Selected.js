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
                <h3 onClick={back}>
                    <BackArrow size="38" />
                    뒤로가기
                    {/* {props.match.params.selected} */}
                </h3>
            </Header>
            <Content>
                <Top>
                    <img src={selectedData[0].icon} alt="" />
                    <div>
                        <p>{selectedData[0].title}</p>
                        <span>{selectedData[0].summary}</span>
                        <button type="button">열기</button>
                    </div>
                </Top>
                <Description>
                    <p>
                        Lorem ipsum dolor sit. <br />
                        commodi assumenda hic, dolore at. <br />
                        perferendis a accusamus est nihil?
                    </p>
                    <span className="more" onClick={() => setTrigger(!trigger)}>
                        {trigger ? '줄이기' : '더보기'}
                    </span>
                    {trigger && (
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non esse
                            aperiam rem ipsam voluptas adipisci consequuntur corrupti aspernatur
                            repellat optio, eligendi illo quae! Magni reiciendis ea neque. Pariatur,
                            nihil iste!
                        </p>
                    )}
                </Description>
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

    h3 {
        ${BackArrow}
        line-height: initial;
        margin-top: -5px;
        cursor: pointer;
        color: rgba(71, 144, 181, 0.8);
        transition: 0.5s;

        &:hover {
            color: rgba(71, 144, 181, 1);
        }
    }
`;

const Top = styled.div``;
const Description = styled.div``;
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
            position: relative;
            padding-left: 1rem;
            flex: 1;

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
                display: block;
                color: rgba(203, 196, 196, 1);
                font-size: 0.8rem;

                @media (min-width: 768px) {
                    font-size: 1rem;
                }
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

    ${Description} {
        position: relative;
        padding: 1rem 0;
        margin: 1rem 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .more {
            position: absolute;
            bottom: 1rem;
            right: 0;
            color: rgb(92, 107, 192);
            font-size: 14px;
        }
    }
`;

export default Selected;
