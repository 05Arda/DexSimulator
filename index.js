#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

// Fonksiyonlar
import { readDatabase, writeDatabase } from './functions/dbHandler.js';



async function mainMenu() {
    const answers = await inquirer.prompt({
        name: 'menu',
        type: 'list',
        message: chalk.green('Select an operation'),
        choices: ['Likidite Ekle', 'Swap', 'Havuz Durumunu Görüntüle', 'Kullanıcı Bakiyesini Görüntüle', 'Çıkış'],
    });

    switch (answers.menu) {
        case ('Likidite Ekle'):
            console.log('Likidite Ekle');
            console.log(readDatabase('userDB'));
            break;

        case ('Swap'):
            console.log('Token Takas');
            writeDatabase('poolDB', {test: 'test'})
            break;

        case ('Havuz Durumunu Görüntüle'):
            console.log('Havuz Durumunu Görüntüle');
            break;

        case ('Kullanıcı Bakiyesini Görüntüle'):
            console.log('Kullanıcı Bakiyesini Görüntüle');
            break;

        case ('Çıkış'):
            return;
    }
    mainMenu();
};

mainMenu();