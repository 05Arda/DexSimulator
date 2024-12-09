import { readDatabase, writeDatabase } from './dbHandler.js';
import { printUser } from './userInfo.js';

import inquirer from 'inquirer';
import chalk from 'chalk';

async function swap(user, fromToken, toToken, amount) {

    let isReverse = false
    const userData = readDatabase('userDB');
    const poolData = readDatabase('poolDB');


    let poolName = `${fromToken}/${toToken}`
    if(!poolData.hasOwnProperty(`${fromToken}/${toToken}`)){
        poolName = `${toToken}/${fromToken}`;
        isReverse = true;
    }

    let [token1, token2] = poolData[poolName].split('/').map(Number);

    if (isReverse) {
        [token1, token2] = [token2, token1];
    }

    let removed = (amount * token2) / (amount + token1);


    console.log(`Removed: ${removed}`);

    if (!userData || typeof userData !== "object") {
        console.error("Hatalı veya boş kullanıcı verisi.");
        return;
    }

    console.log(`====== Token Swap ======`);


    if (userData.privateKey[user][fromToken] < amount) {
        console.error("Yetersiz bakiye.");
        return;
    }

    userData.privateKey[user][fromToken] -= amount;
    userData.privateKey[user][toToken] = (userData.privateKey[user][toToken] || 0) + removed;


    if (isReverse) {
        poolData[poolName] = `${token1 - removed}/${token2 + amount}`;
    }
    else {
        poolData[poolName] = `${token1 + amount}/${token2 - removed}`;
    }
    
    // poolData[poolName] = `${token2 + amount}/${token1 - removed}`;


    writeDatabase('userDB', userData);
    writeDatabase('poolDB', poolData);
    console.log(chalk.green(`Başarıyla ${amount} ${fromToken} takas edildi ve ${removed} ${toToken} alındı.`));


    // printUser(user);

}

export { swap };