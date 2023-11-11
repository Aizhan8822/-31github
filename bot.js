const { Telegraf } = require('telegraf');
const axios=require('axios');
const bot = new Telegraf("6967326670:AAEFEI4CucN4D0UVVoGe_QmHXNEwS1skHxQ");
bot.start((ctx)=>ctx.reply('Welcome'));

bot.on('message',async(ctx)=>{
    if(ctx.message.location){
        console.log(ctx.message.location)
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=3ee64606fb380483815455facd4553b7`;
  const response= await axios.get(url);
  console.log(response);
  ctx.reply(`${response.data.name}:${response.data.main.temp} C`);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

   
    }
   
})









    


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))