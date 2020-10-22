const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
}, 280000);


const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
var prefix = "+";

const gardi = new Discord.Client();
const gardi2 = new Discord.Client();
const gardi3 = new Discord.Client();
const gardi4 = new Discord.Client();
const gardi5 = new Discord.Client();
const gardi6 = new Discord.Client();
const gardi7 = new Discord.Client();
const gardi8 = new Discord.Client();
const gardi9 = new Discord.Client();
const gardi10 = new Discord.Client();
const gardi11 = new Discord.Client();

gardi.login("NzYwNTg0ODI1NDYyNzE4NDc3.X3ON3w.px6s6oowxZq8ysk78b6ryfqW7iU")
gardi2.login("NzYwNTg4Njc1NTY5NTQ5MzIy.X3OP7g.d2IhgUAkKTE97CDlMtNRkJwmEIE")
gardi3.login("NzYwNTg5NDc4MDk5ODEyMzYy.X3OQ3g.V_3MEqA3IQhwy9euytDMrjZy6t4")
gardi4.login("NzYwNTkwMzI2MTcwOTEwNzMw.X3OR0g.4sUiBLdMEma9k8q3S8Y3StuvztY")
gardi5.login("NzYwNTkxMzYyMDIxNzg1NjMw.X3OSrA.ivqmrnbUjVslnOitiO2xvnLa7A4")
gardi6.login("NzYwOTQxOTUwNjIyMTA1NjUy.X3TY6Q.4XkzF5hBJm7vjr-o_68ZRYFXtfM")
gardi7.login("NzYwOTQyNjA2NjAyNjAwNDg4.X3TZtQ.tqcCS3we9DUkd7OGKQSrLI9Wz0g")
gardi8.login("NzYwOTQzNTYzNTU4NDg2MDQ2.X3TacQ.zQrrJA_n7X9p_5HFZ-XGn4xpFsA")
gardi9.login("NzYxMDk2NTI4NjYzOTM3MDM2.X3VpIg.cbzkY9MKL536KO0t0OH6DjtnizY")
gardi10.login("NzYxMDk3MjU3NTc1MTIwOTA2.X3VpsQ.nTtkbzL1gEJYOuIP68AfEe6IKVQ")
gardi11.login("NzYxMDk4MDg5Mjc1NTg4NjU5.X3VqiQ.b_7MvIdfI9d9_c2t-9-Sw0ANzJk")


/////
gardi.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});

gardi11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "stayvoice") {
    if (!(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**DONE ..**!");
        })
        .catch(console.log);
    } else {
      message.reply("**- لە هیچ ڤۆیسێک نیت**");
    }
  }
});
////
gardi.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {

let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
gardi.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);
await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
} catch (e) {
return;
}
}
}
});

gardi2.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
  
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          gardi.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

gardi11.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {

let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
gardi.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);
await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
} catch (e) {
return;
}
}
}
});
