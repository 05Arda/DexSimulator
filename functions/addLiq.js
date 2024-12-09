import { readDatabase, writeDatabase } from './dbHandler.js';

function addLiq(user, pool, amount){
    const poolData = readDatabase('poolDB');
    const userData = readDatabase('userDB');

    const [tokenName1, tokenName2] = pool.split('/');

    const [token1, token2] = poolData[pool].split('/').map(Number);
    let kConstant = token2 / token1;

    let added1 = amount;
    let added2 = amount * kConstant;


    if (userData.privateKey[user][token1] < added1 || userData.privateKey[user][token2] < added2) {
        console.error("Yetersiz bakiye.");
        return
    }

    poolData[pool] = `${token1 + added1}/${token2 + added2}`;
    userData.privateKey[user][tokenName1] -= added1;
    userData.privateKey[user][tokenName2] -= added2;
    userData.privateKey[user][pool] = (userData.privateKey[user][pool] || 0) + amount;

    writeDatabase('poolDB', poolData);
    writeDatabase('userDB', userData);
    

    console.log(`Başarıyla ${added1} ${tokenName1} ve ${added2} ${tokenName2} likidite havuza eklendi.`);


}

export { addLiq }