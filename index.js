const TelegramBot = require('node-telegram-bot-api');

const token = '6700730580:AAFVaqe-7OCkKJ5iNEy8Vl3xKcKA7qh2F9E';

const bot = new TelegramBot(token, {polling: true});

const botStart = () =>{

    bot.setMyCommands([
        {command: '/start', description: 'Привітання'},
        {command: '/info', description: 'Інформація'},
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start'){
            await bot.sendPhoto(chatId, 'assets/oranger.png' );
            return  bot.sendMessage(chatId, `Вітаю вас ${msg.from.first_name}`);
        }

        if (text === '/info') {
            return  bot.sendMessage(chatId, `Ви ${msg.from.first_name}`);
        }

        return bot.sendMessage(chatId, `Я не розумію даної команди ${text}`);
    });
};

botStart();