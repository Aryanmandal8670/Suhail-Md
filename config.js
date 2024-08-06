const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/EXAbTLuZgU2C1n18VtSwUZ";
global.website=process.env.GURL || "https://chat.whatsapp.com/EXAbTLuZgU2C1n18VtSwUZ"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8a326cd0cd97e3d554da0.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Hello Sir Aryan²²¹-Op" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918670755006";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/8a326cd0cd97e3d554da0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_46_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNldnZPc2hMcDV0YTIvZ3ZBRXNTYnNBU2VwcnpHdGtCd3MzYk42MVZDNjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZBVzV0aldDUmplNWd4YmZPWkFZN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWEwYjA3N2QtYmJjZi00MDBmLTg4Y2UtNjZmMzdkYmJkMmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE5OSxcbiAgICAgIDE2OSxcbiAgICAgIDE3MyxcbiAgICAgIDYxLFxuICAgICAgNjAsXG4gICAgICA1NCxcbiAgICAgIDEyMixcbiAgICAgIDE0NyxcbiAgICAgIDUzLFxuICAgICAgMTM5LFxuICAgICAgMTk3LFxuICAgICAgMjI4LFxuICAgICAgNDMsXG4gICAgICAxNTksXG4gICAgICAxMDYsXG4gICAgICAxMjYsXG4gICAgICA1MCxcbiAgICAgIDI1MCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyNDQsXG4gICAgICAxMjAsXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDIxMixcbiAgICAgIDU4LFxuICAgICAgNTUsXG4gICAgICAyMTIsXG4gICAgICA3NixcbiAgICAgIDIwNSxcbiAgICAgIDExNixcbiAgICAgIDE2OCxcbiAgICAgIDEzNyxcbiAgICAgIDIzMixcbiAgICAgIDc3LFxuICAgICAgOTIsXG4gICAgICAxNzYsXG4gICAgICAxMjIsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVENOV1g0NzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTc3NTU0MTMzNjo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFyeWFuIE9wIGJvdC4uLlwiLFxuICAgIFwibGlkXCI6IFwiMjMyNTY4NjM3MTAwMTQ3OjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPQnRORUhFUEdVdUxVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK0FUdUwwbEcyc2dxbkxUcGJpd0ZXM0czRElZbllrTnk5NThoZGdTZ09WVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5dDk4RzJqRFBLRm85TFBqWlNYeHduTFVCLzVUSUF5TFAyM1A1cG4wdE5ldEN6NGJvenR3VHhHL3BKSWZCV2FXVGhYMGR6UjI1Qzc2a2VaTUlVK1NCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoMGVkcWhid1VWcGloZmxyVjBZeXBBbXBrR3ljTXNuTEV6Zkp4RlRISkZmZ2NRS2taUVVoYXpxVFZXaEFWL1o2NmdCMlJCRVFxaytEeDVIeDMzckVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk3NzU1NDEzMzY6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY4MTk3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9uSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT25KLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDdIem1kZ0tDWVdiUzV0RUFmaFFkM05kUzRtc01hQkZ4SWFNVkNWTHl4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ5NzY5NjE4LFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNywxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 Hello Sir Aryan²²¹-Op 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Aryan-Op",
  ownername:process.env.OWNER_NAME|| "Aryan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
