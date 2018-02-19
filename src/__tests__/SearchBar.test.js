import React from 'react';
import SearchBar from '../components/SearchBar';
import renderer from 'react-test-renderer';

describe('Component: SearchBar', () =>{

    test('SearchBar renders correctly', () => {
        const component = renderer.create(
            <SearchBar input={'input'}>SearchBar</SearchBar>
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});

