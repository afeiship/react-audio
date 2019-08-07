import ReactAudio from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    audio1: ''
  };

  _onAudioChange = (e) => {
    // console.log(e.target);
  };

  click1 = (e) => {
    this.setState({ audio1: 'https://tsscdn.finxos.com/tu-resources/xlsfile/media/1.mp3' });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Mutli audios</h1>
        <div className="row" style={{ color: '#0157ff' }}>
          <ReactAudio
            meta={{ current: 0, total: 200 }}
            title="这里应会发生错误.mp3"
            description="王兆川教授王兆川教授王兆川教授1212"
            src="http://kolber.github.io/audiojs/demos/mp3/error.mp3"
          />
        </div>

        {true && (
          <div className="row" style={{ color: '#0157ff' }}>
            <ReactAudio
              meta={{ current: 0, total: 200 }}
              title="2019年食品安全经济研讨会1.mp3"
              description="王兆川教授王兆川教授王兆川教授1212"
              src="http://kolber.github.io/audiojs/demos/mp3/juicy.mp3"
            />
          </div>
        )}

        {true && (
          <div className="row">
            <button onClick={this.click1}>Set New Src</button>
            <ReactAudio
              onChange={this._onAudioChange}
              title="2019年食品安全经济研讨会2.mp3"
              description="王兆川教授王兆川教授王兆川教授"
              src={this.state.audio1}
            />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
