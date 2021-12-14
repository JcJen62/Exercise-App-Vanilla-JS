import * as dotenv from 'dotenv'

dotenv.config()

export const mongoUri = process.env.MONGO_URI
export const port = process.env.PORT
export const rapidAPIHost = process.env.RAPIDAPI_HOST
export const APIKey = process.env.API_KEY