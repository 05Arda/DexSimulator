import { readDatabase } from './dbHandler.js';

function printUser(user) {

    const userData = readDatabase('userDB');
    
    if (!userData || typeof userData !== "object") {
        console.error("Hatalı veya boş kullanıcı verisi.");
        return;
    }

    console.log(`=== ${user} Kullanıcı Bilgileri ===`);
    
    if (!userData.privateKey[user]) {
        console.error("Kullanıcı bulunamadı.");
        return;
    }

    const tokenInfo = userData.privateKey[user];
    const tokens = readDatabase('tokenDB').tokens;
    tokens.forEach(token => {
        console.log(`  ${token}: ${tokenInfo[token]}`);
    });
    // console.log(`  ETH : ${tokenInfo.ETH}`);
    // console.log(`  USDT: ${tokenInfo.USDT}`);
    // console.log(`  UNI: ${tokenInfo.UNI}`);

    console.log("-----------------------------");
}

export { printUser };