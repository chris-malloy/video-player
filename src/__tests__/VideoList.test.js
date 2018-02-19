import React from 'react';
import VideoList from '../components/VideoList';
import renderer from 'react-test-renderer';

describe('Component: VideoList', () => {

    test('VideoList renders correctly', () => {
        const component = renderer.create(
            <VideoList>VideoList</VideoList>
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});