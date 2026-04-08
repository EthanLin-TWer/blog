export const Colors = {
  primary: '#283F3E',   // 铜器青
  secondary: '#E9A182', // 藏花红
  tertiary: '#824E40',  // 淡土棕
} as const

export const injectTokens = () => {
  const root = document.documentElement
  root.style.setProperty('--color-primary', Colors.primary)
  root.style.setProperty('--color-secondary', Colors.secondary)
  root.style.setProperty('--color-tertiary', Colors.tertiary)
}
