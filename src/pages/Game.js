import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import { Selected, Allview } from 'pages';

import Title from 'components/Title';
import { Advert, Popular, Suggest } from 'components/swiper';

const RouteContainer = posed.div({
    enter: { opacity: 1, beforeChildren: true },
    exit: { opacity: 1 }
});

const Game = ({ match, location }) => {
    return (
        <section>
            <Title>Game</Title>
            <Advert road={match.url} />
            <Popular road={match.url} />
            <Suggest road={match.url} />
            <PoseGroup>
                <RouteContainer key={location.key}>
                    <Switch location={location}>
                        <Route
                            path={`${match.url}/allview/:whatview`}
                            component={Allview}
                            key="allview"
                        />
                        <Route
                            path={`${match.url}/selected/:selected`}
                            component={Selected}
                            key="selected"
                        />
                    </Switch>
                </RouteContainer>
            </PoseGroup>
        </section>
    );
};

export default Game;
