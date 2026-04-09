export const Colors = {
  primary: '#283F3E', // 铜器青
  secondary: '#970804', // 淡枣红
  tertiary: '#3B4E3D', // 苍灰绿
  dateRed: '#824E40', // 藏花红
  deerHornTan: '#DFBE96', // 鹿角棕
} as const

export const injectDesignTokens = () => {
  const root = document.documentElement
  root.style.setProperty('--color-primary', Colors.primary)
  root.style.setProperty('--color-secondary', Colors.secondary)
  root.style.setProperty('--color-tertiary', Colors.tertiary)
  root.style.setProperty('--color-date-red', Colors.dateRed)
  root.style.setProperty('--color-deer-horn-tan', Colors.deerHornTan)
}
