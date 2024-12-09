#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

// Functions
import { login } from './functions/login.js';
import { readDatabase, writeDatabase } from './functions/dbHandler.js';
import { printPools } from './functions/liqInfo.js';
import { printUser } from './functions/userInfo.js';
import { swap } from './functions/swap.js';
//  Examples
//      readDatabase('poolDB');
//      readDatabase('userDB');
//      writeDatabase('userDB', data);

let user = 'admin';


async function mainMenu() {
    
    //Login

    while (user === null) {

        const answersLogin = await inquirer.prompt([
            {
                name: 'username',
                type: 'input',
                message: chalk.green('Kullanıcı Adı:'),
            }
        ]);
        
        user = login(answersLogin.username);
    }

    console.log('Hoşgeldin ' + user);


    //Main Menu List
    const answersMain = await inquirer.prompt({
        name: 'menu',
        type: 'list',
        message: chalk.green('Select an operation'),
        choices: ['Likidite Ekle', 'Swap', 'Havuz Durumunu Görüntüle', 'Kullanıcı Bakiyesini Görüntüle', 'Çıkış'],
    });


    console.clear();


    //Main Menu Switch Answers
    switch (answersMain.menu) {
        case ('Likidite Ekle'):
            console.log('Likidite Ekle');
            break;

        case ('Swap'):
            const tokens = readDatabase('tokenDB').tokens.filter(token => !token.includes('/'));

            const answerSwap1 = await inquirer.prompt([
                {
                    name: 'from',
                    type: 'list',
                    message: chalk.green('Hangi tokeni vermek istersiniz?'),
                    choices: tokens,
                }
            ]);
            const answerSwap2 = await inquirer.prompt([
                {
                    name: 'to',
                    type: 'list',
                    message: chalk.green(`${answerSwap1.from} karşılığında ne almak istersiniz?`),
                    choices: tokens.filter(token => token !== answerSwap1.from),
                },
                {
                    name: 'amount',
                    type: 'input',
                    message: chalk.green('Miktar:'),
                }   
            ]);
            swap(user, answerSwap1.from, answerSwap2.to, parseFloat(answerSwap2.amount));
            break;

        case ('Havuz Durumunu Görüntüle'):
            printPools();
            break;

        case ('Kullanıcı Bakiyesini Görüntüle'):
            printUser(user);
            break;

        case ('Çıkış'):
            return;
    }



    //Call Main Menu For REPL (Read–eval–print loop)
    mainMenu();
};

mainMenu();