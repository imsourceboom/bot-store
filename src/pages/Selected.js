import React from 'react';
import styled, { keyframes } from 'styled-components';

const Selected = props => {
    console.log(props);
    const back = () => props.history.goBack();
    return (
        <Container>
            <h1 onClick={back}>뒤로가기 {props.match.params.id}</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis
                officiis, repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore
                aperiam est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Assumenda perspiciatis officiis,
                repudiandae autem reprehenderit excepturi placeat, necessitatibus, tempore aperiam
                est ipsa soluta. Totam ut minima commodi aspernatur id, cum dolore.
            </p>
        </Container>
    );
};

const SlideInRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: none;
    }
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    /* overflow: scroll; */
    background-color: rgba(255, 255, 255, 1);
    animation: ${SlideInRight} 0.3s;
`;

export default Selected;
