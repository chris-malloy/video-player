import React from 'react';
import VideoDetail from '../components/VideoDetail';
import renderer from 'react-test-renderer';

describe('Component: VideoDetail', () => {

    test('VideoDetail renders correctly', () => {
        const component = renderer.create(
            <VideoDetail>VideoDetail</VideoDetail>
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});