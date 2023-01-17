const getEnv = (variable: string) => process.env[`NEXT_PUBLIC_${variable}`]

const env = {
  BASE_URL: getEnv('BASE_URL'),
}

export default env
