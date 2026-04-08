export const sample = <T>(data: T[]): T | undefined => {
  return data[Math.floor(Math.random() * data.length)]
}
