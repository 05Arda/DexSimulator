import { readDatabase } from './dbHandler.js';


function login(user) {
    const users = readDatabase( 'userDB' );
    
    // const user = users.find( user => user.privateKey === privateKey );
    if ( users.privateKey.hasOwnProperty(user) ) {
        return user;
    } else {
        return null;
    }
}

export { login };