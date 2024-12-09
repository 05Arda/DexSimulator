import { readDatabase } from './database.js';

function printPools() {

    const poolData = readDatabase('poolDB');
    
    if (!poolData || typeof poolData !== "object") {
        console.error("Hatalı veya boş pool verisi.");
        return;
    }

    console.log("=== Havuz Likidite Bilgileri ===");
    
    Object.entries(poolData).forEach(([poolName, liquidity]) => {
        const [token1Count, token2Count] = liquidity.split('/').map(Number);


        console.log(`${poolName}:`);
        console.log(`  Token 1: ${token1Count}`);
        console.log(`  Token 2: ${token2Count}`);
        console.log(`  Total Liquidity: ${token1Count + token2Count}`);
        console.log("----------------------------");
    });
}
printPools();