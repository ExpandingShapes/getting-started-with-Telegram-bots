const TelegramBot = require("node-telegram-bot-api")//самое важное, не трогать
const TOKEN = "363388082:AAGaR7-WC37xz4W5_TUujOJf8v86Md41_H0"//жетон, выданный телеграмом боту

console.log("Бот запущен!")

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,//если нас писали когда бот был выкл, мы ответим на сообщение
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