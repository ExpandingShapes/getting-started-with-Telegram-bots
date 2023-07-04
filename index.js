const TelegramBot = require("node-telegram-bot-api")
const TOKEN = ""

console.log("Бот запущен!")

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,//если нам писали когда бот был выкл, мы ответим на сообщение
		params: {
			timeout: 10
		}
	}
})

bot.on("message", (msg) => {
	console.log(msg)
	const { id } = msg.chat;

	if(msg.text.toLowerCase() === "hello")
		bot.sendMessage(id, "Hello " + msg.from.first_name)
	else
		bot.sendMessage(id, debug(msg))
		.then(() => {
			console.log("Message has been sent")
		})
		.catch((error) => {
			console.error(error)
		})
})

function debug(obj = {}){
	return JSON.stringify(obj, null, 4)
}
