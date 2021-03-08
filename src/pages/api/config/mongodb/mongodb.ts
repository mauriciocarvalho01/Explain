import { MongoClient, Db } from 'mongodb'

let uri = process.env.MONGODB_URI; 

let DbName = process.env.MONGODB_DB;



let cachedClient: MongoClient;
let cachedDb: Db;

if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

if (!DbName) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
    )
}

export async function connectToDatabase() {
    console.log(uri);
    console.log(DbName);

    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(DbName);
    console.log(`connect to db ${DbName}`); 

    cachedClient = client;
    cachedDb = db;

    return { client, db }


}

