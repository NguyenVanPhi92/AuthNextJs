// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb'

if (!process.env.DATABASE_URL)
    throw new Error('Invalid/Missing environment variable: "DATABASE_URL"')

const uri: string = process.env.DATABASE_URL
let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    let globalWithMongoClientPromise = global as typeof globalThis & {
        _mongoClientPromise: Promise<MongoClient>
    }

    if (!globalWithMongoClientPromise._mongoClientPromise) {
        client = new MongoClient(uri)
        globalWithMongoClientPromise._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongoClientPromise._mongoClientPromise
} else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
}

export default clientPromise
