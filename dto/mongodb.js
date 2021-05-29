const mongoClient = require('mongodb').MongoClient;

// mongodb+srv://facul-test-user:JF5JRSRcLcj2FT7@cluster0.rcqur.mongodb.net/faculdemo?authSource=admin&replicaSet=atlas-p3kuxz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
const conn = {
  user: 'facul-test-user',
  pass: 'JF5JRSRcLcj2FT7',
  db: 'faculdemo',
  host: 'cluster0.rcqur.mongodb.net'
};

const connect = async() => {
  try {
    const uri = `mongodb+srv://${conn.user}:${conn.pass}@${conn.host}/${conn.db}?retryWrites=true&w=majority`;
    const client = await mongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db(conn.db);
    return db;
  } catch (e) {
    throw e;
  }
};

module.exports.find = async(collectionName, filter) => {
  try {
    const db = await connect();
    const collection = await db.collection(collectionName);
    const items = await collection.find(filter).toArray();
    return items;
  } catch (e) { 
    throw e;
  }
};

module.exports.insert = async(collectionName, item) => {
  try {
    const db = await connect();
    const collection = await db.collection(collectionName);
    const result = await collection.insert(item);
    return result;
  } catch (e) { 
    throw e;
  }
};
