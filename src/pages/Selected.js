import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material';
import { Eye } from 'styled-icons/icomoon/Eye';
import posed from 'react-pose';
import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Intro, Comment } from 'components/swiper';

import { data } from 'data';

export default props => {
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
                <Summary>
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        fractions={2}
                    />
                    <Category>아케이드</Category>
                    <View>
                        <Eye />
                        <span className="count">245,485회</span>
                    </View>
                </Summary>
                <Description className={trigger && 'view'}>
                    <p>
                        Lorem ipsum dolor sit. <br />
                        commodi assumenda hic, dolore at. <br />
                        perferendis a accusamus est nihil accusamus
                    </p>
                    <span className="more" onClick={() => setTrigger(!trigger)}>
                        {trigger ? '줄이기' : '더보기'}
                    </span>
                    {trigger && (
                        <p className="toggle-box">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non esse
                            aperiam rem ipsam voluptas adipisci consequuntur corrupti aspernatur
                            repellat optio, eligendi illo quae! Magni reiciendis ea neque. Pariatur,
                            nihil iste!
                        </p>
                    )}
                </Description>
                <PreView>
                    <h3>미리보기</h3>
                    <Intro />
                </PreView>
                <Review>
                    <h3>평가 및 리뷰</h3>
                    <Comment />
                </Review>
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
    z-index: 1;
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

const Summary = styled.div``;
const Category = styled.div``;
const View = styled.span``;

const Description = styled.div``;

const PreView = styled.div``;
const Review = styled.div``;

const Content = styled.div`
    ${Layout}
    padding:0 1rem 80px;

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
                cursor: pointer;

                @media (min-width: 768px) {
                    width: 85px;
                    height: 30px;
                }
            }
        }
    }

    ${Summary} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        color: rgb(207, 216, 220);

        & > .rating {
            & .fa-star {
                @media (max-width: 767px) {
                    font-size: 1rem !important;
                }
            }
        }

        ${Category} {
            @media (max-width: 767px) {
                font-size: 14px;
            }
        }

        ${View} {
            display: flex;
            align-items: center;

            & > svg {
                width: 18px;
            }

            & > .count {
                padding: 0 0.3rem;
                @media (max-width: 787px) {
                    font-size: 14px;
                }
            }
        }
    }

    ${Description} {
        position: relative;
        padding-bottom: 1rem;
        margin-top: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &.view {
            padding-bottom: 3rem;
        }

        .more {
            position: absolute;
            bottom: 1rem;
            right: 0;
            color: rgb(92, 107, 192);
            font-size: 14px;
            padding-left: 1rem;
            background-color: rgba(255, 255, 255, 0.8);
        }

        .toggle-box {
            animation: fade-toggle 1s;
            @keyframes fade-toggle {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        }
    }

    ${PreView} {
        padding-bottom: 1rem;
        margin-top: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        h3 {
            padding-bottom: 1rem;
        }
    }

    ${Review} {
        padding-bottom: 1rem;
        margin-top: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        h3 {
            padding-bottom: 1rem;
        }
    }
`;
