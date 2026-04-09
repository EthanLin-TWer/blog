import React, { FC } from 'react'

import './styles.styl'

interface Props {
  variant?: 'not-found' | 'network-error'
}

const CONTENT = {
  'not-found': {
    title: 'Nothing here',
    message: 'This post could not be found.',
  },
  'network-error': {
    title: 'Could not connect',
    message:
      'Content is served via GitHub Pages and raw.githubusercontent.com.' +
      ' Mainland China support is on the way — stay tuned!',
  },
}

export const NoContent: FC<Props> = ({ variant = 'not-found' }) => (
  <div className="no-content-container">
    <div className="no-content-graphic" />
    <p className="no-content-title">{CONTENT[variant].title}</p>
    <p className="no-content-message">{CONTENT[variant].message}</p>
  </div>
)
