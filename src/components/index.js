import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import NxAudio from 'next-audio';
import objectAssign from 'object-assign';
import nxTimeformat from 'next-time-format';
import NxDraggable from 'next-draggable';

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
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {};
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      status: NxAudio.STATUS.init,
      rate: 1,
      step: 0,
      info: { current: 0, total: 0 }
    };
    this.audioElement = React.createRef();
    this.handleElement = React.createRef();
    this.barElement = React.createRef();
  }

  componentDidMount() {
    const audioEl = this.audioElement.current;
    const handleEl = this.handleElement.current;
    const barEl = this.barElement.current;
    this.barBound = barEl.getBoundingClientRect();
    this.audio = new NxAudio(audioEl, { onChange: this._onChange });
    this.draggable = new NxDraggable(handleEl, {
      onChange: this._onHandleChange
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

  _onHandleChange = (inEvent) => {
    const { value } = inEvent.target;
    if (inEvent.type === 'drag') {
      var rate = value.x / this.barBound.width;
      if (rate <= 1) {
        this.audio.move(rate);
        this.setState({
          step: (100 * rate).toFixed(2) + '%'
        });
      }
    }
  };

  render() {
    const { className, src, title, description, ...props } = this.props;
    const { status, rate, step, info } = this.state;
    return (
      <section className={classNames('react-audio', className)} {...props}>
        {src && (
          <audio
            className="react-audio__element"
            hidden
            ref={this.audioElement}
            src={src}>
            NOT SUPPORT AUDIO.
          </audio>
        )}

        <div className="react-audio__control">
          <div className="bd">
            <aside className="react-audio__status">
              {(status === NxAudio.STATUS.init ||
                status === NxAudio.STATUS.pause) && (
                <button
                  onClick={this._onAction.bind(this, 'play')}
                  className="action play">
                  <img src={require('./assets/icon-play.png')} />
                </button>
              )}
              {(status === NxAudio.STATUS.play ||
                status === NxAudio.STATUS.timeupdate) && (
                <button
                  onClick={this._onAction.bind(this, 'pause')}
                  className="action pause">
                  <img src={require('./assets/icon-pause.png')} />
                </button>
              )}

              {status === NxAudio.STATUS.ended && (
                <button
                  onClick={this._onAction.bind(this, 'play')}
                  className="action ended">
                  <img src={require('./assets/icon-replay.png')} />
                </button>
              )}
            </aside>
            <section className="flex1 react-audio__content">
              <header className="hd">
                <div className="react-audio__title">{title}</div>
                <select
                  onChange={this._onRateChange}
                  name="rate"
                  className="react-audio__rate"
                  value={rate}>
                  <option value="1">常速</option>
                  <option value="1.25">x1.25 倍</option>
                  <option value="1.5">x1.5 倍</option>
                  <option value="1.75">x1.75 倍</option>
                  <option value="2">x2 倍</option>
                </select>
              </header>
              <footer className="ft">
                <div className="react-audio__description">{description}</div>
                <div className="react-audio__times">
                  <span className="current">{format(info.current)}</span> /{' '}
                  <span className="total">{format(info.total)}</span>
                </div>
              </footer>
            </section>
          </div>
          <footer className="ft">
            <section ref={this.barElement} className="bar">
              <div style={{ width: step }} className="react-audio__progress" />
              <div
                style={{ left: step }}
                ref={this.handleElement}
                className="react-audio__handle"
              />
            </section>
          </footer>
        </div>
      </section>
    );
  }
}
