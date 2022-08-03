const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
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
