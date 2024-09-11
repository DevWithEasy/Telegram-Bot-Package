require('dotenv').config();
const {Telegraf, Markup} = require('telegraf');

//create a new bot instance
const bot = new Telegraf(process.env.BOT_TOKEN)

//if user start bot or send message command '/start'
bot.start(ctx=>{
    ctx.reply('Hello, I am a simple bot for managing your tasks.')
})

//if user send message '/help' custom reply as your needs
bot.help(ctx=>{
    ctx.reply('Here are my commands:\n/add - add a new task\n/list - list all tasks\n/delete - delete a task by its ID')
})

bot.command('text', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Courses Categories');
});

//-----------replay with photo url image another source--------------
bot.command('image_url', (ctx) => {
    ctx.replyWithPhoto(
        'https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg',
        {
            caption: 'Welcome to the bot! Choose an option below:',
        }
    );
});

//-----------replay with photo local source--------------
bot.command('image_local', (ctx) => {
    ctx.replyWithPhoto(
        { source: 'image_path.jpg' },
        {
            caption: 'Welcome to the bot! Choose an option below:',
        }
    );
});

//---------replay with text and button----------
bot.command('text_keyboard', (ctx) => {
    ctx.reply(
        'Welcome to the bot! Choose an option below:',
        Markup.inlineKeyboard([
            [
                Markup.button.callback('Option 1', 'OPTION_1'),
                Markup.button.callback('Option 2', 'OPTION_2')
            ],
            [Markup.button.callback('More Info', 'INFO')]
        ])
    );
});

//reply with keyboard image text
bot.command('text_image_keyboard', (ctx) => {
    ctx.replyWithPhoto(
        'https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg', // Image URL
        {
            caption: 'Welcome to the bot! Choose an option below:', // Text message
            reply_markup: Markup.inlineKeyboard([ // Inline keyboard
                [
                    Markup.button.callback('Option 1', 'OPTION_1'),
                    Markup.button.callback('Option 2', 'OPTION_2')
                ],
                [Markup.button.callback('More Info', 'INFO')]
            ])
        }
    );
});

// if user write and sent specific text
bot.hears('Specific_Text',(ctx)=>{
    bot.telegram.sendMessage(
        ctx.chat.id,
        'This bot data created from coincap api'
    )
})

// Send a default message for any text input that isn't a command
bot.on('text', (ctx) => {
    ctx.reply('I did not understand that. Please use the buttons or type /start to see options.');
});

//run the bot
bot.launch()
console.log('Bot started')