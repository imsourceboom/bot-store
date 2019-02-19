import React from 'react';
import { Route } from 'react-router-dom';

import { Selected } from 'pages';

import Title from 'components/Title';
import { Advert, Popular } from 'components/swiper';

const Game = ({ match }) => {
    return (
        <section>
            <Title>Game</Title>
            <Advert road={match.url} />
            <Popular />
            <Advert />
            <Popular />
            <Route path={`${match.url}/:id`} component={Selected} />
        </section>
    );
};

export default Game;
