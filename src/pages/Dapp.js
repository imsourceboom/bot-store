import React from 'react';
import { Route, Link } from 'react-router-dom';

const Dapp = ({ match }) => (
    <section>
        <h1>Dapp</h1>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quas quaerat placeat
            iure omnis tenetur, possimus doloremque ducimus numquam maiores rerum quo error rem
            libero officiis quis debitis recusandae accusantium!
        </div>
        <Link to={`${match.url}/detail`}>Detail</Link>
        <Route path={`${match.url}/:id`} component={Detail} />
    </section>
);

const Detail = ({ match }) => (
    <>
        <h1>{match.params.id}</h1>
    </>
);

export default Dapp;
