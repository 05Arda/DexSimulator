#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

// Functions
import { login } from './functions/login.js';
import { readDatabase, writeDatabase } from './functions/dbHandler.js';
import { printPools } from './functions/liqInfo.js';
//  Examples
//      readDatabase('poolDB');
//      readDatabase('userDB');
//      writeDatabase('userDB', data);

let user = null;


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

    //Main Menu Switch Answers
    switch (answersMain.menu) {
        case ('Likidite Ekle'):
            console.log('Likidite Ekle');
            break;

        case ('Swap'):
            console.log('Token Takas');
            break;

        case ('Havuz Durumunu Görüntüle'):
            printPools();
            console.log('Havuz Durumunu Görüntüle');
            break;

        case ('Kullanıcı Bakiyesini Görüntüle'):
            console.log('Kullanıcı Bakiyesini Görüntüle');
            break;

        case ('Çıkış'):
            return;
    }



    //Call Main Menu For REPL (Read–eval–print loop)
    mainMenu();
};

mainMenu();