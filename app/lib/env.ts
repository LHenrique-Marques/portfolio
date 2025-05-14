export const getEnv = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Variável de ambiente ${key} não está definida.`)
  }
  return value
}

export const HYGRAPH_URL = getEnv('HYGRAPH_URL')
export const HYGRAPH_TOKEN = getEnv('HYGRAPH_TOKEN')
