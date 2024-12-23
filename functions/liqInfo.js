import { readDatabase } from './dbHandler.js';

function printPools() {

    const poolData = readDatabase('poolDB');
    
    if (!poolData || typeof poolData !== "object") {
        console.error("Hatalı veya boş pool verisi.");
        return;
    }

    console.log("=== Havuz Likidite Bilgileri ===");
    
    Object.entries(poolData).forEach(([poolName, liquidity]) => {
        const [token1Count, token2Count] = liquidity.split('/').map(Number);
        const [poolToken1, poolToken2] = poolName.split('/');


        console.log(`${poolName}:`);
        console.log(`  ${poolToken1}: ${token1Count}`);
        console.log(`  ${poolToken2}: ${token2Count}`);
        console.log(`  Total Liquidity Constant: ${token1Count * token2Count}`);
        console.log("----------------------------");
    });
}

export { printPools };