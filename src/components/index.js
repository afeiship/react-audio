import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import NxAudio from 'next-audio';
import objectAssign from 'object-assign';
import nxTimeformat from 'next-time-format';

// status: 0: stop 1: play 2: pause

const format = function(inTime) {
  if (inTime) {
    const { second, minute } = nxTimeformat(inTime * 1e3);
    const _minute = String(minute).padStart(2, '0');
    const _second = String(second).padStart(2, '0');
    return _minute + ':' + _second;
  }
  return '00:00';
};

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    status: 0,
    step: 0,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { status } = inProps;
    this.state = { status, rate: 1, info: { current: 0, total: 0 } };
    this.audioElement = React.createRef();
  }

  componentDidMount() {
    this.audio = new NxAudio({
      element: this.audioElement.current,
      onChange: this._onChange
    });
  }

  _onAction = (inAction) => {
    this.audio[inAction]();
  };

  _onChange = (inEvent) => {
    const { type } = inEvent;
    this.setState({
      step: this.audio.times.rate * 100 + '%',
      status: this.audio.status,
      info: {
        current: this.audio.times.current,
        total: this.audio.times.total
      }
    });
  };

  _onRateChange = (inEvent) => {
    const { value } = inEvent.target;
    this.setState({ rate: value }, () => {
      this.audio.prop('rate', value);
    });
  };

  render() {
    const { className, src, title, description, ...props } = this.props;
    const { status, rate, step, info } = this.state;
    return (
      <div className={classNames('react-audio', className)} {...props}>
        {src && (
          <audio
            className="react-audio__element"
            hidden
            ref={this.audioElement}
            src={src}>
            NOT SUPPORT.
          </audio>
        )}

        <div className="react-audio__control">
          <div className="bd">
            <aside className="react-audio__status">
              {status === 0 && (
                <button
                  onClick={this._onAction.bind(this, 'play')}
                  className="action play">
                  <img src={require('./assets/icon-play.png')} />
                </button>
              )}
              {status === 1 && (
                <button
                  onClick={this._onAction.bind(this, 'pause')}
                  className="action pause">
                  <img src={require('./assets/icon-pause.png')} />
                </button>
              )}
              {status === 2 && (
                <button
                  onClick={this._onAction.bind(this, 'play')}
                  className="action play">
                  <img src={require('./assets/icon-play.png')} />
                </button>
              )}
            </aside>
            <section className="flex1 react-audio__content">
              <header className="hd">
                <div className="react-audio__title">{title}</div>
                <div className="react-audio__rate">
                  <select
                    onChange={this._onRateChange}
                    name="rate"
                    value={rate}>
                    <option value="1">常速</option>
                    <option value="1.25">x1.25 倍</option>
                    <option value="1.5">x1.5 倍</option>
                    <option value="1.75">x1.75 倍</option>
                    <option value="2">x2 倍</option>
                  </select>
                </div>
              </header>
              <footer className="ft">
                <div className="react-audio__description">
                  {description}
                </div>
                <div className="react-audio__times">
                  <span className="current">{format(info.current)}</span> /{' '}
                  <span className="total">{format(info.total)}</span>
                </div>
              </footer>
            </section>
          </div>
          <footer className="ft">
            <div
              style={{ width: step }}
              className="react-audio__progress"
            />
            <div style={{ left: step }} className="react-audio__handle" />
          </footer>
        </div>
      </div>
    );
  }
}
