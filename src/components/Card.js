import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    margin: 0 0 2rem;
    border-radius: 10px;
    box-shadow: 1px 0 18px 0 rgba(0, 0, 0, 0.07), 0px 20px 32px 0 rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    cursor: pointer;

    ${({ theme }) =>
        theme === 'expanded'
            ? `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
            : `
    position: relative;
  `};

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

const Flipper = posed(Box)({
    flip: {
        transition: { type: 'spring', stiffness: 1000, damping: 1000 }
    },
    expanded: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        flip: true
    },
    inline: {
        position: 'relative',
        width: '100%',
        height: '360px',
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
                style={{ zIndex: this.state.expanded ? 1 : 0 }}
            >
                <div className="media--wrap">
                    <img src={image} alt="" />
                </div>
                <div className="content--wrap">
                    <span className="tag">{tag}</span>
                    <h1 className="title">{title}</h1>
                    <p className="summary">{summary}</p>
                </div>
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
