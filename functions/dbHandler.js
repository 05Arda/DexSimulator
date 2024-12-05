import fs from 'fs';

const dbPath = "./data/database.json";


function readDatabase() {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
}

function writeDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export { readDatabase, writeDatabase };