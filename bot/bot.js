const Discord = require("discord.js");
const client = new Discord.Client();
sadWords = ["triste", "depresso", "arrabbiato"];
encouragements = ["Si propr nu trmòun"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.on("message", (msg) => {
  if (msg.content === "$inspire") {
    getQuote().then((quote) => msg.channel.send(quote));
  }

  if (sadWords.some((word) => msg.content.includes(word))) {
    const encouragement =
      encouragements[Math.floor(Math.random() * encouragements.length)];
    msg.reply(encouragement);
  }
});

client.on("message", (msg) => {
  if (msg.content === "/articles") {
    //.......
  }
});

client.on("message", (msg) => {
  if (msg.content === "/articles/authors") {
    //.......
  }
});

client.on("message", (msg) => {
  if (msg.content === "/articles/{id}") {
    //.......
  }
});

client.login(
  "MTAwMzU4NTYxMDI2ODgxOTQ3Nw.GKlAdP.vFmpmtMq_T1sDq9TtYcOxqWCJh4DpmeIKIh6Ms"
);
