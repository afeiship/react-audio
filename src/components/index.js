import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import NxAudio from 'next-audio';
import objectAssign from 'object-assign';
import nxTimeformat from 'next-time-format';
import NxDraggable from 'next-draggable';
import RCM from 'react-condition-manager';
import nxPadStart from 'next-pad-start';

const format = function(inTime) {
  if (inTime) {
    const { second, minute } = nxTimeformat(inTime * 1e3);
    const _minute = nxPadStart(minute, 2, '0');
    const _second = nxPadStart(second).padStart(2, '0');
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
    description: PropTypes.string,
    meta: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    meta: null,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { meta } = inProps;
    this.state = {
      loaded: !!meta,
      status: NxAudio.STATUS.init,
      rate: 1,
      step: 0,
      meta: meta || { current: 0, total: 0 }
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
    this.audio = new NxAudio(audioEl, { onChange: this._onAudioChange });
    this.draggable = new NxDraggable(handleEl, { onChange: this._onHandleChange });
  }

  updateMeta() {
    const { current, total } = this.audio.times;
    const { meta } = this.props;
    this.setState({
      meta: {
        current: current,
        total: meta ? meta.total : total
      }
    });
  }

  _onAction = (inAction) => {
    this.audio[inAction]();
  };

  _onAudioChange = (inEvent) => {
    const { onChange } = this.props;
    const { times, status } = this.audio;
    const { type } = inEvent;
    (type === 'loadedmetadata' || type === 'error') && this.setState({ loaded: true });
    this.updateMeta();
    this.setState({
      step: times.rate * 100 + '%',
      status: status
    });
    onChange({ target: this.audio });
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
      var rate = (value.x - this.barBound.left) / this.barBound.width;
      if (rate <= 1) {
        this.audio.move(rate);
        this.setState({
          step: (100 * rate).toFixed(2) + '%'
        });
      }
    }
  };

  render() {
    const { className, src, title, description, meta, ...props } = this.props;
    const { status, rate, step, loaded } = this.state;

    return (
      <section className={classNames('react-audio', className)} {...props} data-loaded={loaded}>
        {src && (
          <audio className="react-audio__element" hidden ref={this.audioElement} src={src}>
            NOT SUPPORT AUDIO.
          </audio>
        )}

        <div className="react-audio__control">
          <div className="bd">
            <RCM
              className="react-audio__status"
              items={[
                status === NxAudio.STATUS.init ||
                  status === NxAudio.STATUS.pause ||
                  status === NxAudio.STATUS.loaded,
                status === NxAudio.STATUS.play,
                status === NxAudio.STATUS.ended,
                status === NxAudio.STATUS.error
              ]}>
              <button onClick={this._onAction.bind(this, 'play')} className="react-audio__icon">
                <img className="icon--play" src={require('./assets/icon-sprites.png')} />
              </button>
              <button onClick={this._onAction.bind(this, 'pause')} className="react-audio__icon">
                <img className="icon--pause" src={require('./assets/icon-sprites.png')} />
              </button>
              <button onClick={this._onAction.bind(this, 'play')} className="react-audio__icon">
                <img className="icon--replay" src={require('./assets/icon-sprites.png')} />
              </button>
              <button className="react-audio__icon">
                <img className="icon--error" src={require('./assets/icon-sprites.png')} />
              </button>
            </RCM>
            <section className="react-audio__content">
              <header className="hd">
                <div className="react-audio__title">{title}</div>
                <select onChange={this._onRateChange} className="react-audio__rate" value={rate}>
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
                  <span className="current">{format(this.state.meta.current)}</span> /{' '}
                  <span className="total">{format(this.state.meta.total)}</span>
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
              <div className="react-audio__progress-animate" />
            </section>
          </footer>
        </div>

        <div className="react-audio__overlay" />
      </section>
    );
  }
}
