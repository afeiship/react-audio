import React from 'react';
import { render } from 'react-testing-library';
import ReactAudio from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const { container } = render(<ReactAudio />);
    const cnt = container.querySelector('.react-audio')
      .innerHTML;
    expect(cnt).toMatch(/Hello React/);
  });
});
