import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Box = ({ road, pathname, comment, title, summary, image }) => (
    <>
        {/* <ItemWrap className="swiper-slide">
            <Link to={`${road}/${pathname}`}>
                <h5>{comment}</h5>
                <h3>{title}</h3>
                <p>{summary}</p>
                <img src={image} alt="" />
            </Link>
        </ItemWrap> */}
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
        <Wrap className="swiper-slide">
            <Item>
                <div className="title">
                    제목 부분입니다. 제목이 길어집니다. 제목은 최대 두줄까지만 허용합니다.
                </div>
                <div className="author">
                    <Rating
                        className="rating"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        initialRating={3.5}
                        fractions={2}
                        readonly
                    />
                    <span>작성자 아이디입니다.</span>
                    <span>2019-01-01</span>
                </div>
                <div className="comment">
                    코멘트는 최대 100글자까지만 허용하도록 합니다. 그 이상은안되! 모든 국민은 자기의
                    행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 평화통일정책의
                    수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.
                </div>
            </Item>
        </Wrap>
    </>
);

const Wrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        /* height: auto; */
        /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
        /* margin-bottom: 2rem; */

        &:first-child {
            margin-left: -2%;
        }
        &:last-child {
            margin-right: -2%;
        }

        @media (min-width: 768px) {
            & {
                max-width: 350px;

                &:first-child {
                    margin-left: initial;
                }
                &:last-child {
                    margin-right: initial;
                }
            }
        }
    }
`;

const Item = styled.div`
    padding: 1rem;
    border-radius: 10px;
    background-color: rgba(236, 239, 241, 0.5);

    .title {
        font-size: 15px;
        font-weight: bold;
    }

    .author {
        display: flex;
        justify-content: space-between;
        color: rgb(189, 189, 189);
        font-size: 14px;
        font-weight: 300;
        padding: 0.35rem 0;

        & > .rating {
            & .fa-star {
                color: rgb(255, 202, 40);
                font-size: 0.8rem !important;
            }
        }
    }

    .comment {
        font-size: 14px;
    }
`;

export default Box;
