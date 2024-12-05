import fs from 'fs';

const dbPath = {
    'poolDB': "./data/poolDB.json",
    'userDB': "./data/userDB.json",
}

function readDatabase(dbType) {
    const data = fs.readFileSync(dbPath[dbType]);
    return JSON.parse(data);
}

function writeDatabase(dbType, data) {
    fs.writeFileSync(dbPath[dbType], JSON.stringify(data, null, 2));
}

export { readDatabase, writeDatabase };