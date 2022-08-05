const dotenv = require("dotenv")
const Discord = require("discord.js");
const fetch = require("node-fetch")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
dotenv.config()


client.on('ready', () => {
    client.channels.fetch('1004758028165333065')
        .then(channel => {
            channel.send("Ciao! Sono il tuo bot sulle notizie spaziali :rocket: \n Questi sono i miei comandi:\n - /articles ⇒ ritorna gli ID tutti gli articoli \n - /articles/authors ⇒ ritorna la lista di autori o della provenienza degli articoli \n - /articles/{id} ⇒ ritorna il testo dell’articolo");
        })
});
client.on("ready", () => { console.log("Pronto a partire, capo!") })

client.on("messageCreate", (msg) => {
    if (msg.content === "ping") {
        msg.reply({ content: "pong" });
    }
});

client.on("messageCreate", async (msg) => {
    if (msg.content === "/articles/authors") {
        const messages = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=100");
        const data = await messages.json()
        // console.log(data);
        let siteList = []
        data.forEach((element) => {
            if (!siteList.includes(element.newsSite)) {
                siteList.push(element.newsSite);
            }
        })
        msg.reply(siteList.join('\n'))

    }
})

client.on("messageCreate", async (msg) => {
    const num= msg.content
    const onlynum = /\/articles\/[0-9]+/g;
    //console.log(onlynum);
    if (msg.content!="/articles/authors" && msg.content == `/articles/${num.slice(10)}`  && onlynum.test(msg.content) ) {
        const messages = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${num.slice(10)}`);
        const data = await messages.json()
        // console.log(data);
       // msg.reply(data.title);
        if (data.summary != "" && onlynum.test(msg.content)) {
            client.channels.fetch("1004758028165333065").then((channel) => {
              const embed = new Discord.MessageEmbed()
                .setColor(0xefff00)
                .setTitle(data.title)
                .setURL(data.url)
                .setAuthor(data.newsSite)
                .addFields({ name: "Summary", value: data.summary.trim(1024) });
              channel.send({ embeds: [embed] });
            });
          } else {
            client.channels.fetch("1004758028165333065").then((channel) => {
              const embed = new Discord.MessageEmbed()
                .setColor(0xefff00)
                .setTitle(data.title)
                .setURL(data.url)
                .setAuthor(data.newsSite);
              channel.send({ embeds: [embed] });
            });
          }
        }
      });

    client.on("messageCreate", async (msg) => {
        if (msg.content === "/articles") {
            const messages = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30");
            const data = await messages.json()
            // console.log(data);
            let siteId = []
            data.forEach((element) => {
                if (!siteId.includes(element.id)) {
                    siteId.push(element.id);
                }
            })
            console.log(siteId);
            msg.reply(siteId.join("\n"))
    
        }
    })

client.login(process.env.TOKEN)
