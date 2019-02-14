import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Box = styled.article`
    position: relative;
    width: 100%;
    height: 360px;
    margin: 0 0 2rem;
    border-radius: 10px;
    box-shadow: 1px 0 18px 0 rgba(0, 0, 0, 0.07), 0px 20px 32px 0 rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);
    cursor: pointer;

    & > .media--wrap {
        width: 100%;

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
        padding: 0 1rem;
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

const InSide = styled.div`
    padding: 0 1rem 5rem;

    & img {
        display: block;
        max-width: 100%;
        height: auto;
        max-height: 500px;
        margin: 0 auto;
    }
`;

const Flipper = posed(Box)({
    flip: {
        transition: { type: 'spring', stiffness: 500, damping: 500 }
    },
    expanded: {
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        flip: true
    },
    inline: {
        position: 'relative',
        width: '100%',
        height: '360px',
        borderRadius: '10px',
        flip: true
    }
});

class Card extends React.Component {
    state = { expanded: false };

    toggle = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const { image, tag, title, summary } = this.props;
        return (
            <Flipper
                onClick={this.toggle}
                pose={this.state.expanded ? 'expanded' : 'inline'}
                style={{
                    zIndex: this.state.expanded ? 1 : 0,
                    overflow: this.state.expanded ? 'scroll' : 'hidden',
                    overscrollBehavior: this.state.expanded ? 'contain' : 'initial'
                }}
            >
                <div
                    className="media--wrap"
                    style={{ height: this.state.expanded ? 'auto' : '75%' }}
                >
                    <img src={image} alt="" />
                </div>
                <div
                    className="content--wrap"
                    style={{
                        height: this.state.expanded ? 'auto' : '25%',
                        padding: this.state.expanded ? '1rem 1rem 3rem' : '0 1rem'
                    }}
                >
                    <span className="tag">{tag}</span>
                    <h1 className="title">{title}</h1>
                    <p className="summary">{summary}</p>
                </div>
                {this.state.expanded && (
                    <InSide>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus
                            repudiandae ullam beatae, maiores rerum, ipsum voluptates itaque fuga
                            illum iste mollitia, quo temporibus debitis asperiores cumque explicabo
                            laborum nesciunt?
                        </p>
                        <img
                            src="http://image.chosun.com/sitedata/image/201705/17/2017051700631_0.jpg"
                            alt=""
                        />
                        <p>
                            생명을 갑 원질이 스며들어 힘차게 착목한는 귀는 못할 부패뿐이다. 품에
                            충분히 우리 무엇을 보이는 위하여, 그와 타오르고 황금시대다. 예가 것은
                            이상의 이상, 얼음에 옷을 봄바람이다. 바이며, 보이는 이상 인생을
                            황금시대를 우리의 것이 얼마나 때문이다. 듣기만 미묘한 우리 교향악이다.
                            우리 찾아다녀도, 물방아 뛰노는 하여도 두손을 칼이다. 없으면, 돋고,
                            인류의 산야에 하는 영락과 그들은 있는가? 열락의 보배를 거친 따뜻한
                            발휘하기 것은 대고, 이것이다. 열락의 군영과 길을 심장은 이상의 웅대한
                            평화스러운 황금시대를 불어 말이다. 충분히 할지라도 두손을 열락의 위하여,
                            천지는 보이는 심장은 있는 봄바람이다. 힘차게 그러므로 싸인 타오르고
                            무엇을 되는 청춘의 때문이다. 역사를 그것을 예수는 놀이 얼마나 사랑의
                            칼이다. 위하여, 크고 보내는 타오르고 꽃이 피어나는 것이다. 일월과 가지에
                            만물은 피다. 방황하였으며, 과실이 것이 것이다. 되는 살 이상의 실로 너의
                            앞이 기쁘며, 되려니와, 것이다. 자신과 있을 불어 있으랴? 같으며, 스며들어
                            온갖 않는 몸이 무엇이 봄바람이다. 힘차게 이것은 싸인 있는 이상, 것이
                            영원히 그리하였는가? 하는 목숨이 같은 방황하여도, 일월과 피어나는
                            봄바람이다. 있는 이는 인간이 때까지 풍부하게 것이다. 대고, 심장의 역사를
                            열락의 약동하다. 튼튼하며, 하였으며, 같이, 불어 무엇을 희망의 장식하는
                            있는 힘있다. 무엇을 사라지지 찾아다녀도, 인생에 쓸쓸하랴? 어디 얼음이
                            이상은 고행을 희망의 자신과 못할 운다. 청춘의 천고에 방황하였으며, 어디
                            역사를 가슴이 뼈 굳세게 교향악이다. 싹이 앞이 같은 용감하고 트고,
                            것이다. 천지는 할지라도 곧 같은 생의 방황하였으며, 쓸쓸하랴?
                        </p>
                    </InSide>
                )}
            </Flipper>
        );
    }
}

// const Card = ({ image, tag, title, summary, detail }) => {
//     return (
//         <Box onClick={detail}>
//             <div className="media--wrap">
//                 <img src={image} alt="" />
//             </div>
//             <div className="content--wrap">
//                 <span className="tag">{tag}</span>
//                 <h1 className="title">{title}</h1>
//                 <p className="summary">{summary}</p>
//             </div>
//         </Box>
//     );
// };

export default Card;
