import React, { FC } from 'react'

import { colors } from '../../../design-tokens/theme'

import './styles.styl'

export const Loading: FC = () => (
  <div className="loading-container">
    <div
      className="loading-spinner"
      style={{ borderTopColor: colors.tongQiQing }}
    />
  </div>
)
