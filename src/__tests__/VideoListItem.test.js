import React from 'react';
import VideoListItem from '../components/VideoListItem';
import renderer from 'react-test-renderer';

describe('Component: VideoListItem', () => {

    test('VideoListItem renders correctly', () => {
        const component = renderer.create(
            <VideoListItem>VideoListItem</VideoListItem>
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});