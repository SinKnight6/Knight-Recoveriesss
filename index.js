const Discord = require("discord.js");
const colors = require("./colors.json");
const { handler } = require('./commands');
const bot = new Discord.Client();
const talkedRecently = new Set();
const { MessageEmbed } = require('discord.js')
const DESTINATION = '789337633368047639';
const openTickets = new Map();
const ACCEPT = '790045951318294558';
const REJECT = '790045966199029760';


const swearWords = ["Nigga", "nigga", "shit", "Shit", "Fuck", "fuck", "Stupid", "stupid", "Dick", "dick", "Dipship", "dipshit", "Asshole", "asshole", "STFU", "Stfu", "stfu", "Bitch", "bitch", "hoe", "Hoe", "HOE", "Dumb", "DUMB", "Dumass", "DUMASS", "Dumfuck", "DUMFUCK"];

const token = process.env.token;

const PREFIX = '!';
// Events End

// Bot Activity start
    bot.on('ready', () => {
    console.log(' is online!')
    let statuses = [
        `${bot.guilds.cache.size} Servers`,
        "!help",
        `over ${bot.users.cache.size} users!`,
         "helping users",
         "Bot helper"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
    })
// Bot Activity end.


// What keeps the messages running satrt
    bot.on("message", async message => {
        let args = message.content.substring(PREFIX.length).split(" ");
        if (message.author.bot) return;
// What keeps the messages running end.

// command cooldown
    if (talkedRecently.has(message.author.id))
    return;
// end of command cool down


// Swear word start
    if( swearWords.some(word => message.content.includes(word)) ) {
    if(message.channel.type === 'dm'){
    message.react('😡');
    message.author.send("``Please respect bot and watch your language`` <:MiddleFinger:784693700922966026>")
    .then(sentMessage => sentMessage.delete({ timeout: 50000
    }))
    .catch(error => {
  
  });
    // Or just do message.delete();
  }
  } ;
// Swear word end.


// Bot prevents from answewring its own message
    if(message.author.bot) return;
// End

// Manage delete a channel start
/*
if (message.channel.id === '704209584071508079')
  await message.delete();
// Manage delete a channel end

// command handler start(Not in use atm)

if(message.content.toLowerCase() === '!help'){
   handler(message, '!help')
}

else if(message.content.toLowerCase() === 'recovery'){
  handler(message.channel, 'recovery')

}
else if(message.content.toLowerCase() === 'account'){
    handler(message.channel, 'account')
}
*/
// Coammand handler end(not in use atm)

// account commands start
/*
if (message.channel.id === '789337633896923158')
  await message.delete();
*/

if (message.content.toLowerCase() === 'account' && message.channel.id === '789337633896923158'){
  message.author.send('Bot is typing <a:Typing_:790032798580867084>')
    .then(sentMessage => sentMessage.delete({ timeout: 8000 })
   .catch(error => {
    // Hnadler
  }))
  .then(() => {
    message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 100,
    errors: ['time'],
    })
    .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
      })
      .catch(() => {
        let uEmbed1 = new Discord.MessageEmbed()
        .setColor(colors.blue)
        .setTitle(`Hello there! Please type one of the Options bellow`)
        .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
        .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
        .setDescription(`

2. If you want to purchase a Modded Account please type, **_\`Buy Modded Account Now\`_** .

3. If you want to know how the proccess works please type, **_\`Modded Account Process\`_**.

        `)
        .setTimestamp()
        .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send({embed: uEmbed1})
        .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
        .catch(error => {
        }));
    });
  });
}
// Break
if (message.content.toLowerCase() === 'modded account process'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🤔')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let embed = new Discord.MessageEmbed()
      .setTitle('**__How does It work?__**')
      .setColor(colors.orange)
      .setDescription (`

* Decide any of our available package you want.
* Type and send the bot you currently messaging with right now, **_\`Buy modded account now\`_**.
* Wait for Admin or Staff Member to recive and accept your message.
* You will be given options to pay with.
* Select Payment Method & Pay.
* That’s it, now your order will be completed within 24-48 hours.
      `)
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: embed})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};
// Break
if (message.content.toLowerCase() === 'buy modded account now'){
  message.react('📌')
  if (message.author.bot) return;
  if(message.channel.type === 'dm'){
    if (!openTickets.has(message.author.id)) {
      message.author.send('_Reaching out for Knight-Shop team members, please stand by_ <a:Newloading:790047698995642429>')
      .then(sentMessage => sentMessage.delete({ timeout: 5000 })
        .catch(error => {
        // Hnadler
        }))
        .then(() => {
        message.channel.awaitMessages(response => response.content === '', {
        max: 1,
        time: 100,
        errors: ['time'],
        })
        .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
        })
        .catch(() => {
        const embed = new MessageEmbed()
        .setDescription(`Hello! ${message.author} We have received your message, Please be patient while we get someone from our team to get to you, meanwhile you can go ahead and use command _\`Account Packages\`_`)
        .setColor(colors.black)
        .setTimestamp()
        message.channel.send(embed)
        .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
        .catch(error => {
        }));
        });
        });
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author.username ,message.author.displayAvatarURL())
          .setDescription(`[${message.author}] Is looking to buy a Modded Account for GTA V`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query, Please type what recovery you will be buying and what Payment method you would like to use.... (PayPal, Debit or Credit card, Amazon gift card).`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor(colors.orange)
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });                                                 
                  channel.send('_Ending chat_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor(colors.orange)
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}
// Break

// Break

if (message.content.toLowerCase() === 'account packages'){
  if(message.channel.type === 'dm'){
  message.channel.send(`Looking for packages that are available <a:Newloading:790047698995642429>
${message.author} Please stand by`)
    .then(sentMessage => sentMessage.delete({ timeout: 8000 })
   .catch(error => {
    // Hnadler
  }))
  message.react('📦')
  .then(() => {
    message.channel.awaitMessages(response => response.content === '', {
      max: 1,
      time: 100,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
      })
      .catch(() => {
        let uEmbed1 = new Discord.MessageEmbed()
        let pages = [`GTA V Social Club Modded Account !
                                PC VERSION ONLY 
<a:Rightanimated:790106527708217354> Tire 1 <a:Leftanimitedarrow:790106237676552273> 
        
Details: 
>>> •Brand new new account (Un-Modded).
•GTA V Game Included!.
•Full Access Account : You can change, Email, Password, Username.
\`Price: $15.00 USD\``,
`GTA V Social Club Modded Account !
PC VERSION ONLY 
<a:Rightanimated:790106527708217354> Tire 2 <a:Leftanimitedarrow:790106237676552273>
   
Details: 
>>> •Brand new new account + Starter Recovery Pack.
•GTA V Game Included!.
•Full Access Account : You can change, Email, Password, Username.
\`Price: $25.00 USD\``,
`GTA V Social Club Modded Account !
PC VERSION ONLY 
<a:Rightanimated:790106527708217354> Tire 3 <a:Leftanimitedarrow:790106237676552273>

Details: 
>>> •Brand new new account + Bronze Recovery Pack.
•GTA V Game Included!.
•Full Access Account : You can change, Email, Password, Username.
\`Price: $30.00 USD\``,
`GTA V Social Club Modded Account !
PC VERSION ONLY 
<a:Rightanimated:790106527708217354> Tire 4 <a:Leftanimitedarrow:790106237676552273>

Details: 
>>> •Brand new new account + Silver Recovery Pack.
•GTA V Game Included!.
•Full Access Account : You can change, Email, Password, Username.
\`Price: $35.00 USD\``,
`GTA V Social Club Modded Account !
PC VERSION ONLY 
<a:Rightanimated:790106527708217354> Tire 5 <a:Leftanimitedarrow:790106237676552273>

Details: 
>>> •Brand new new account + Gold Recovery Pack.
•GTA V Game Included!.
•Full Access Account : You can change, Email, Password, Username.
\`Price: $40.00 USD\``,
`<a:Rightanimated:790106527708217354> LOOKING FOR A CUSTOM MADE ACCOUNT? <a:Leftanimitedarrow:790106237676552273>

Details:
>>> •Custom LVL: 1 - 2000
•Custom Cash: 1 Million - 2 Billion
•Custom Unlocks: Stats<CLothes<Hair<Outfits<Tatto's
\`Price: **Prices Change Depending on What You Ask For.**\``];
let page = 1;
const embed = new Discord.MessageEmbed()
  .setTitle('<a:A_:789930401120124938><a:C_:789930467784130570><a:C_:789930467784130570><a:O_:789935677390979153><a:U_:789935780755013673><a:N_:789947839467225139><a:T_:789935759091695626><a:S_:789935740980953109>','Preact on either ⬅️ or ➡️ to flip between pages.')
  .setColor(colors.black)
  .setFooter(`Page ${page} of ${pages.length}`)
  .setTimestamp()
  .setDescription(pages[page-1])

  message.channel.send(embed).then(msg => {
    msg.react('⬅️').then( r => {
      msg.react('➡️')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === ('⬅️') && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === ('➡️') && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 5400000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 5400000 });

      backwards.on('collect', r => {
        if (page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        if (page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
      
    })});
  });
    });
  });
}
}

// Break
if (message.content.toLowerCase() === 'debit or credit account') {
  if (message.channel.type === 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username ,message.author.displayAvatarURL())
    .setThumbnail('https://cdn.discordapp.com/attachments/704209584071508079/784519798007529472/JD-11-512.png')
    .setTitle(`Credit or Debit Payment`)
    .addField(`.`,`After you have done the payment please come back to this message and react to one of the emojies.
    <:_Check:790045951318294558> = Confirm Purchase
    <:_Cross:790045966199029760> = Cancel process`)
    .setDescription(`Please go to the page to choose which Modded Account Pack you want and you can pay afterwards by pressing on the "BUY NOW" Blue button https://knight-shop.webnode.com/modded-account-page-only/`)
    .setColor('#0070FF')
    .setTimestamp()
    .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    const msg = await message.channel.send(embed)
    await msg.react(ACCEPT);
    await msg.react(REJECT); 
    const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
    const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
    const choice = reactions.get(ACCEPT) || reactions.get(REJECT)
    if (choice.emoji.id === ACCEPT) {
      const embed3 = new Discord.MessageEmbed()
        .setTitle('Pleasae Fill out this form in order to recieve your order once we have done processing your account.')
        .setDescription(`https://forms.gle/JPYse9AiZv2LRvGA9`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
  } else if (choice.emoji.id === REJECT) { 
    const embed3 = new Discord.MessageEmbed()
        .setDescription(`Please tell us what is the issue`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
    }

  }

}
// account commands end

// Payment methods start
if (message.content.toLowerCase() === 'amazon gift card') {
  if (message.channel.type === 'dm') {
    message.react('784279694852882442')
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username ,message.author.displayAvatarURL())
    .setTitle(`Amzon Payment Method`)
    .setThumbnail('https://cdn.discordapp.com/attachments/704209584071508079/784675711717867570/amazon_2.png')
    .addField(`.`,`After you have done the payment please come back to this message and react to one of the emojies.
    <:_Check:790045951318294558> = Confirm Purchase
    <:_Cross:790045966199029760> = Cancel process`)
    .setDescription(`Please send us the gift card code is 14 or 15 characters or send us a picture of the gift card code to this **email: Knight.shop.team@gamil.com** 
__Please make sure that is redeemable in the US and that the gift card has the right amount.__`)
    .setColor('#0070FF')
    .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    .setTimestamp();
    const msg = await message.channel.send(embed)
    await msg.react(ACCEPT);
    await msg.react(REJECT); 
    const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
    const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
    const choice = reactions.get(ACCEPT) || reactions.get(REJECT)
    if (choice.emoji.id === ACCEPT) {
      const embed3 = new Discord.MessageEmbed()
        .setTitle('Pleasae Fill out this form in order to recieve your order once we have done processing your account.')
        .setDescription(`
If you bought a **Recovery** please press on this form https://forms.gle/925e2HHy1u4GSpPR8


If you bought a **Modded Account** please press on this form https://forms.gle/JPYse9AiZv2LRvGA9`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
  } else if (choice.emoji.id === REJECT) { 
    const embed3 = new Discord.MessageEmbed()
        .setDescription(`Please tell us what is the issue`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
    }

  }

}
// Break
if (message.content.toLowerCase() === 'paypal') {
  if (message.channel.type === 'dm') {
    message.react('694342853278695494')
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username ,message.author.displayAvatarURL())
    .setTitle(`PayPal Payment`)
    .setThumbnail('https://cdn.discordapp.com/attachments/704209584071508079/784517982851301416/Paypal_NNN.png')
    .addField(`.`,`After you have done the payment please come back to this message and react to one of the emojies.
    <:_Check:790045951318294558> = Confirm Purchase
    <:_Cross:790045966199029760> = Cancel process`)
    .setDescription(`Send the money here https://paypal.me/KnightShopTeam?locale.x=en_US **Please make sure to send the right amount of money otherwise we will not be able to process with your request.**`)
    .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    .setColor('#0070FF')
    .setTimestamp();
    const msg = await message.channel.send(embed)
    await msg.react(ACCEPT);
    await msg.react(REJECT); 
    const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
    const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
    const choice = reactions.get(ACCEPT) || reactions.get(REJECT)
    if (choice.emoji.id === ACCEPT) {
    const embed3 = new Discord.MessageEmbed()
        .setTitle('Pleasae Fill out this form in order to recieve your order once we have done processing your account.')
        .setDescription(`
If you bought a **Recovery** please press on this form https://forms.gle/925e2HHy1u4GSpPR8


If you bought a **Modded Account** please press on this form https://forms.gle/JPYse9AiZv2LRvGA9`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
        message.author.send(embed3)
  } else if (choice.emoji.id === REJECT) { 
    const embed3 = new Discord.MessageEmbed()
        .setDescription(`Please tell us what is the issue`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
        message.author.send(embed3)
      }
    
    }
    
  }
// Payment methods ends

// Reacovery commnads start
if (message.content.toLowerCase() === 'recovery' && message.channel.id === '789337633896923158'){
    message.author.send('Bot is typing <a:Typing_:790032798580867084>')
    .then(sentMessage => sentMessage.delete({ timeout: 8000 })
    .catch(error => {
    // Hnadler
    }))
    .then(() => {
    message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 100,
    errors: ['time'],
    })
    .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
      })
      .catch(() => {
        let uEmbed1 = new Discord.MessageEmbed()
          .setColor(colors.blue)
          .setTitle(`Hello there! Please fallow the instructions bellow`)
          .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
          .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
          .setDescription(`

2. If you want to purchase a Recovery please type, **_\`Buy Recovery Now\`_** .

3. If you want to know how the proccess works please type, **_\`Recovery Process\`_**.

          `)
          .setTimestamp()
          .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
          message.author.send({embed: uEmbed1});
  });
  });
  };
// Break
if (message.content.toLowerCase() === 'recovery process'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:Typing_:790032798580867084>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🤔')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let embed = new Discord.MessageEmbed()
      .setTitle('**__How does It work?__**')
      .setColor(colors.orange)
      .setDescription (`

* Decide any of our available package you want.
* Type and send the bot you currently messaging with right now **_\`Buy recovery now\`_**.
* Wait for Admin or Staff Member to recive and accept your message.
* You will be given options to pay with.
* Select Payment Method & Pay.
* That’s it, now your order will be completed within 24-48 hours.
      `)
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: embed})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};
// Break
if (message.content.toLowerCase() === 'buy recovery now'){
  message.react('📌')
  if (message.author.bot) return;
  if(message.channel.type === 'dm'){
    if (!openTickets.has(message.author.id)) {
      message.author.send('_Reaching out for Knight-Shop team members, please stand by_ <a:Newloading:790047698995642429>')
      .then(sentMessage => sentMessage.delete({ timeout: 5000 })
        .catch(error => {
        // Hnadler
        }))
        .then(() => {
        message.channel.awaitMessages(response => response.content === '', {
        max: 1,
        time: 100,
        errors: ['time'],
        })
        .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
        })
        .catch(() => {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Please be patient while we get someone from our team to get to you, meanwhile you can go ahead and use command _\`Recovery Pacakges\`_`)
      .setColor(colors.black)
      .setTimestamp()
      message.channel.send(embed)
      .then(sentMessage => sentMessage.delete({ timeout: 86400000 })
      .catch(error => {
      }));
      });
      });
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author ,message.author.displayAvatarURL())
          .setDescription(`[${message.author}] Is looking to buy a recovery for GTA V`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query, Please type what recovery you will be buying and what Payment method you would like to use.... (PayPal, Debit or Credit card, Amazon gift card).`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor(colors.orange)
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });                                                 
                  channel.send('_Ending chat_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor(colors.orange)
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Newloading:790047698995642429>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                .catch(error => {
                // Hnadler
                }))
                .then(() => {
                message.channel.awaitMessages(response => response.content === '', {
                max: 1,
                time: 100,
                errors: ['time'],
                })
                .then((collected) => {
                message.channel.send(`The collected message was: ${collected.first().content}`);
                })
                .catch(() => {
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Newloading:790047698995642429>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
                  .catch(error => {
                  // Hnadler
                  }))
                  .then(() => {
                  message.channel.awaitMessages(response => response.content === '', {
                  max: 1,
                  time: 100,
                  errors: ['time'],
                  })
                  .then((collected) => {
                  message.channel.send(`The collected message was: ${collected.first().content}`);
                  })
                  .catch(() => {
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}
// Break
if (message.content.toLowerCase() === 'recovery packages'){
  if(message.channel.type === 'dm'){
    message.author.send('Bot is typing <a:Typing_:790032798580867084>')
      .then(sentMessage => sentMessage.delete({ timeout: 3000 })
     .catch(error => {
      // Hnadler
    }))
    message.react('📦')
    .then(() => {
      message.channel.awaitMessages(response => response.content === '', {
        max: 1,
        time: 3000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.send(`The collected message was: ${collected.first().content}`);
        })
        .catch(() => {
let embed = new Discord.MessageEmbed()
.setColor(colors.blue)
.setTitle('__**Recovery Options Available**__')
.addField(`__**STARTER RECOVERY PACK**__
Details:
>>> **•$300 Million GTA Online Money**
**•1-120 Levels**
•All Available Unlocks (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards`,
'```Price: $10.00 USD```')
.addField(`__**BRONZE RECOVERY PACK**__
Details: 
>>> **•$600 Million GTA Online Money**
**•1-250 Levels**
•All Available Unlocks (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards 
--------------------------
•Unlock Bunker Research`,
'```Price: $15.00 USD```')
.addField(`__**SILVER RECOVERY PACK**__
Details:
>>> **•$1 Billion GTA Online Money**
**•1-420 Levels**
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards 
--------------------------
•Unlock Bunker Research
--------------------------
•CEO and Bike money clutter`,
'```Price: $20.00 USD```')
.addField(`__**GOLD RECOVERY PACK**__
Details:
>>> **•Any amount of money + Unlimited re-fills**
**•1-750 Levels**
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards
--------------------------
•Unlock Bunker Research 
--------------------------
•CEO and Bike money clutter 
--------------------------
• Unlock DLC & Holiday Content (Full)`,
'```Price: $25.00 USD```')
.addField(`__**GTA 5 CASH UP (MONEY ONLY)**__
Details:
>>> •Need more CASH but not levels or RP?
Get your  Cash up now!`, 
'Price Options:\n' +
'```$10.00 USD```  for 400 MILLION MEGA Cash!\n' +
'```$15.00 USD```  for  700 MILLION ULTRA Cash!\n' +
'```$20.00 USD```  for  1.2   BILLION INSANE Cash!\n')
.setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
.setTimestamp()
message.author.send({embed: embed})
.then(sentMessage => sentMessage.delete({ timeout: 7200000 })
.catch(error => {
   }));
 });
});
 }
};
// Break
if (message.content.toLowerCase() === 'debit or credit recovery') {
  if (message.channel.type === 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username ,message.author.displayAvatarURL())
    .setThumbnail('https://cdn.discordapp.com/attachments/704209584071508079/784519798007529472/JD-11-512.png')
    .setTitle(`Credit or Debit Payment`)
    .addField(`.`,`After you have done the payment please come back to this message and react to one of the emojies.
    <:_Check:790045951318294558> = Confirm Purchase
    <:_Cross:790045966199029760> = Cancel process`)
    .setDescription(`Please go to the page to choose which Modded Account Pack you want and you can pay afterwards by pressing on the "BUY NOW" Blue button https://knight-shop.webnode.com/recovery-page-only/`)
    .setColor('#0070FF')
    .setTimestamp()
    .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    const msg = await message.channel.send(embed);
    await msg.react(ACCEPT);
    await msg.react(REJECT); 
    const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
    const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
    const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
    if (choice.emoji.id === ACCEPT) {
      const embed3 = new Discord.MessageEmbed()
        .setTitle('Pleasae Fill out this form in order to recieve your order once we have done processing your account.')
        .setDescription(`https://forms.gle/925e2HHy1u4GSpPR8`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
  } else if (choice.emoji.id === REJECT) { 
    const embed3 = new Discord.MessageEmbed()
        .setDescription(`Please tell us what is the issue`)
        .setColor('#3AFF00')
        .setTimestamp()
        .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send(embed3)
    }

  }

}
// Recovery commands end






})


bot.login(token);
