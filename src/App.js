import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from 'style/GlobalStyle';
import styled from 'styled-components';

import Nav from 'components/Nav';
import { Story, Game, Bot, Search } from 'pages';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Nav />
                <Main>
                    <Switch>
                        <Route path="/game" component={Game} />
                        {/* <Route path="dapp" component={Dapp} /> */}
                        <Route path="/bot" component={Bot} />
                        <Route path="/search" component={Search} />
                        <Route path="/" component={Story} />
                    </Switch>
                </Main>
            </>
        );
    }
}

const Main = styled.main`
    & > section {
        position: relative;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 1rem 80px;
        box-sizing: border-box;
        animation: trigger 0.5s;

        @keyframes trigger {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }
`;

export default App;
