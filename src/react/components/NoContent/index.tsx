import React, { FC } from 'react'

import './styles.styl'

interface Props {
  message?: string
}

export const NoContent: FC<Props> = ({
  message = 'This post could not be found.',
}) => (
  <div className="no-content-container">
    <div className="no-content-graphic" />
    <p className="no-content-title">Nothing here</p>
    <p className="no-content-message">{message}</p>
  </div>
)
