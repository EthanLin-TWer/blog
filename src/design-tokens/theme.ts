/**
 * Design tokens — Traditional Chinese colour palette
 *
 * 铜器青 TONG QI QING  — Bronze-vessel teal   #283F3E  R:40  G:63  B:62
 * 藏花红 ZANG HUA HONG — Tibetan-flower rose   #E9A182  R:233 G:161 B:130
 * 淡土棕 DAN TU ZONG   — Pale earth brown      #824E40  R:130 G:78  B:64
 */
export const colors = {
  tongQiQing: '#283F3E',  // 铜器青 — primary / accent
  zangHuaHong: '#E9A182', // 藏花红 — warm highlight
  danTuZong: '#824E40',   // 淡土棕 — deep earth
} as const

export type ColorToken = typeof colors[keyof typeof colors]
