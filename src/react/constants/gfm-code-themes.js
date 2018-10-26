import sample from 'lodash/sample'

const notBadThemes = [
  'prism/coy',
  'hljs/arduino-light',
  'hljs/atelier-forest-light',
  'hljs/color-brewer',
  'hljs/foundation',
  'hljs/github-gist',
  'hljs/github',
  'hljs/idea',
  'hljs/magula',
  'hljs/mono-blue',
  'hljs/qtcreator_light',
  'hljs/tomorrow-night-eighties',
  'hljs/vs2015',
]

export const randomTheme = () => sample(notBadThemes)
