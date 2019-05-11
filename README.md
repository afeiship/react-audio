# react-audio
> Audio player components for react.

## install
```shell
npm install -S afeiship/react-audio
```

## usage
1. import css
  ```scss
  @import "~react-audio/style.scss";

  // customize your styles:
  $react-audio-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAudio from 'react-audio';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAudio />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-audio/
