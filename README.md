# express-mern-x

Create a telegram Bot simply easy way.
it will be helpfull to easy setup a telegram server.Lets try and enjoy
.
## Create a project

```javascript
npx create-tg-bot project_name
or
npx create-tg-bot
```

## Run development

```javascript
npm run dev
```

## Users package

| Use             | Package                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Server | telegraf |
| Development Run | nodemon |

## Telegram Bot Development Documentation
🗎 We are working to coleect a big document to the Telegram Bot documentation

## Replay [text]

```javascript
bot.command('your_command', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Courses Categories');
});
```

## Replay [text and image-(local storage image)]

```javascript
bot.command('your_command', (ctx) => {
    ctx.replyWithPhoto(
        { source: 'image_path.jpg' },
        {
            caption: 'Welcome to the bot! Choose an option below:',
        }
    );
});
```

## Replay [text and image-(url image)]

```javascript
bot.command('your_command', (ctx) => {
    ctx.replyWithPhoto(
        'https://img.freepik.com/free-vector/creative-welcome-team-banner-corporate-hiring_1017-43282.jpg',
        {
            caption: 'Welcome to the bot! Choose an option below:',
        }
    );
});
```

## Replay []
```javascript

```

## Replay []
```javascript

```

## Replay []
```javascript

```

## Replay []
```javascript

```

## Replay []
```javascript

```