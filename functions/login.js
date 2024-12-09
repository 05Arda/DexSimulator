import { readDatabase } from './functions/dbHandler.js';


function login( privateKey ) {
    const users = readDatabase( 'userDB' );
    const user = users.find( user => user.privateKey === privateKey );
    if ( user ) {
        return user;
    } else {
        return { error: 'User not found' };
    }
}

export { login };