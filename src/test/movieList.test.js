import React from 'react';
import MovieList from '../components/movieList.jsx';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

//It can be validated from the snapshot that the prices are compared and the user is show the website with the lowest price.
it("Movie data is being populated and prices compared", ()=>{
    const tree= renderer.create(<MovieList poster="" title="Bahubali"
    website1Price="31" website2Price="50" website1="Cinema World" website2="Film World"></MovieList>).toJSON();
    expect(tree).toMatchSnapshot();
})

