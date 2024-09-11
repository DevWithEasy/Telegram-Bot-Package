const { Markup } = require("telegraf");

class Command{
    constructor(bot){
        this.bot = bot;
    }
    start(){
        this.bot.start(ctx=>{
            ctx.reply('Hello, I am a simple bot for managing your tasks.')
        })
    }

    help(){
        this.bot.help(ctx=>{
            ctx.reply('Here are my commands:\n/add - add a new task\n/list - list all tasks\n/delete - delete a task by its ID')
        })
    }

    // ====================================
    // call all action inside this function
    // ====================================
    init(){
        this.start()
        this.help()
    }
}

module.exports = Command;