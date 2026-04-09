import React, { FC } from 'react'

import './styles.styl'

export const RenderError: FC = () => (
  <div className="render-error-container">
    <p className="render-error-title">Something went wrong</p>
    <p className="render-error-message">
      An unexpected error occurred while rendering this post.
      <br />
      Please try refresh the page.
    </p>
  </div>
)
