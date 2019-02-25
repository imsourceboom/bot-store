import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material';
import posed from 'react-pose';

const Selected = props => {
    const back = () => props.history.goBack();
    const [trigger, setTrigger] = useState(false);
    return (
        <ContainerPose id="overlay">
            <Header>
                <BackArrow size="32" />
                <span onClick={back}>뒤로가기 {props.match.params.selected}</span>
            </Header>
            {/* <Wrap> */}
            <Content>
                <span onClick={() => setTrigger(!trigger)}>버튼이라고 치자</span>
                {trigger && <h2>햐이</h2>}
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                    officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus,
                    tempore aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum
                    dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
                    perspiciatis officiis, repudiandae autem reprehenderit excepturi placeat,
                    necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima commodi
                    aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Assumenda perspiciatis officiis, repudiandae autem reprehenderit excepturi
                    placeat, necessitatibus, tempore aperiam est ipsa soluta. Totam ut minima
                    commodi aspernatur id, cum dolore. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Assumenda perspiciatis officiis, repudiandae autem
                    reprehenderit excepturi placeat, necessitatibus, tempore aperiam est ipsa
                    soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                    repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                    aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
                </p>
            </Content>
            {/* </Wrap> */}
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

    span {
        line-height: initial;
        margin-top: -5px;
    }
`;

const Content = styled.div`
    ${Layout}
    padding:0 1rem 60px;
`;

export default Selected;
