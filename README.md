# Video Player

This is a simple video app built with React and Redux as part of Stephen Grider's Intro to React course on Udemy.  It is losely modeled after YouTube.

***

[Installation](https://github.com/chris-malloy/video-player#installation) | [Testing](https://github.com/chris-malloy/video-player#testing) | [Challenges and Solutions](https://github.com/chris-malloy/video-player#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/video-player#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/video-player#acknowledgements)

***

## Description

This app serves a refresher course on React.  The flow of the app follows this structure: there is a search bar component which handles and onChange event from the user and then passes that term to App.  App then renders VideoDetail, which is the main video for the user to focus on, and VideoList, which is a mapping component that renders 5 VideoListItems that pull data from YouTube API.  As for a couple tidying up points, some basic styling is implemented in conjunction with Bootstrap to clean up the look of the app, and lodash is used to trottle the frequency of the onChange event so as to make the app flow better.

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest.  Jest ships with React but if you don't have it installed for some reason you can run this script:

```sh
npm install --save-dev jest babel-jest babel-preset-env babel-preset-react react-test-renderer
```

## Unique Dependecies

* youtube-api-search - Used to pull data from YouTube.

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

#### Testing with Jest

Testing and Jest are new to me, so that was a tricky path for me to navigate.  So far I have only been able to implement some simple snapshot tests like this one:

```javascript
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
```

On future updates I plan to add mock tests for the onChange functions and async tests to handle the API call to YouTube.

### Code Snippets

#### Lodash Debounce Function

Here is a particularly interesting example of lodash usage I had not yet encountered.  The debounce function is used to trottle how often the onChange event is called and make the app feel less jittery.  Otherwise, the page would re-render nearly every millisecond, making the app feel jumpy and make a user feel uneasy.  This implementation could definitely be useful for a lot of use cases.

```javascript
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
```

#### Null Props Handling

When making API calls, props initialize as empty, undefinied, null, or some other value that is useless to us.  These calls usually take a half second, but that's still enough time to cause errors in our app, especially when testing.  To solve this, one of the simplest ways is to use a conditional like so:

```javascript
    if (!video) {
        return <div>Loading...</div>;
    }
```

This could be improved even more by adding in a temporary component that is similar to the componet that is intended to render once javascript has returned with the data from the API call.

### Acknowledgements

Stephen Grider, thank you for your course.  It was a great way to take my React knowledge to the next level.  I'm looking forward to the rest of the course.