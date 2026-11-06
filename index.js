const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('Scan QR ini di WA lu:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot WAHelper udah online!');
});

client.on('message', async msg => {
    const text = msg.body.toLowerCase();

    if (text === '!ping') {
        msg.reply('Pong! Bot WAHelper aktif ✅');
    }
    else if (text === '!menu') {
        msg.reply(`*MENU WAHELPER*\n\n!ping - cek bot hidup\n!menu - liat menu\n!halo - sapa bot`);
    }
    else if (text === '!halo') {
        msg.reply('Halo juga! Ketik !menu');
    }
});

client.initialize();
