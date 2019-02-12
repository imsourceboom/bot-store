import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { QuoteLeft, Joystick, Bot } from 'styled-icons/boxicons-solid';
import { Apps } from 'styled-icons/material';
import { Search } from 'styled-icons/boxicons-regular';

const Nav = () => {
    return (
        <>
            <Wrap>
                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={active} style={link}>
                            <QuoteLeft size="22" />
                            <span>이야기</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/game" activeStyle={active} style={link}>
                            <Joystick size="22" />
                            <span>게임</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dapp" activeStyle={active} style={link}>
                            <Apps size="22" />
                            <span>댑</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bot" activeStyle={active} style={link}>
                            <Bot size="22" />
                            <span>봇</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Search" activeStyle={active} style={link}>
                            <Search size="22" />
                            <span>검색</span>
                        </NavLink>
                    </li>
                </ul>
            </Wrap>
        </>
    );
};

const link = {
    color: 'rgba(217, 217, 220, 1)',
    transition: '0.5s'
};

const active = {
    color: 'rgba(107, 162, 208, 1)'
};

const Wrap = styled.nav`
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;

    & > ul {
        display: flex;
        width: 100%;
        height: 60px;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.1);

        @media (min-width: 1440px) {
            & {
                max-width: 1024px;
                border-radius: 10px 10px 0 0;
            }
        }

        & li {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            & > a {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @media (min-width: 768px) {
                    & {
                        flex-direction: row;
                    }
                }

                & span {
                    @media (max-width: 768px) {
                        & {
                            font-size: 13px;
                        }
                    }
                    @media (min-width: 768px) {
                        & {
                            padding: 0 0.5rem;
                        }
                    }
                }
            }
        }
    }
`;

export default Nav;
