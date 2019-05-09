import ReactAudio from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactAudio
          title="2019年食品安全经济研讨会.mp3"
          description="王兆川教授王兆川教授王兆川教授"
          src="https://tsscdn.finxos.com/tu-resources/xlsfile/media/1.mp3"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
