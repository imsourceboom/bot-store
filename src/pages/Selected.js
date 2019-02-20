import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Selected = props => {
    const back = () => props.history.goBack();
    const [trigger, setTrigger] = useState(false);
    return (
        <ContainerPose id="overlay">
            <Wrap>
                <h1 onClick={back}>뒤로가기 {props.match.params.id}</h1>
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
            </Wrap>
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

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
`;

export default Selected;
