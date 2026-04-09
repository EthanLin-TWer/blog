import React, { FC } from 'react'

import './styles.styl'

export const Loading: FC = () => (
  <div className="loading-container">
    <svg className="loading-spinner" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="15" className="loading-track" />
      <circle cx="18" cy="18" r="15" className="loading-arc" />
    </svg>
  </div>
)
