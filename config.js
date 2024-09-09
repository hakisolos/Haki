//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJQenJ5Tk4rUk1rVC81SVMwUVlTcXcrQ1B5UHpDRmFjWFhuMW9xZklYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VxWkR4c0R6VVF1ZEJjQXpyaDg1aUh2UTdjb3Q5dnRiNzloVC9hNENDOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RHYwRU9UcUJ1bDlQdC9KUWpBNEVGSkFhUThITzROd2RQV1dHOU5jT25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVmhPcFdmVE9XNmRGNXNSUi9GdTg5REtkMmVWN3N4dzlVN0JtdHF3UlQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KY3pCYkdTL2s3NEJsbWRlbHBoSzF6MVJUMkljQzlHVGJsUC9yOGdLVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtUDUxR3pwMWFHRkg1Q1dLREw1VHphTkZmM0N3Q0JGSHRRb0ZDNzVoRkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUsxbnY3anFqcW94MHUyTUw1dFVLTml5dFEvTUZjR2QrME0xTjJTNEYxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5wMVRwYVRBVjRRSGRLRWhWZHpQbU43K29VMXRDY0VrVWNlUWFtUDFVYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdzUXRSREE2OG5SbkN0MnE4eFFEK0hoVUJ1RHhUcDZhZ3RFQVQvZXMySlRlV1c0cklrKy96YUhYT1hiYkZNb1hQalZlQW84KzMza24rNVZ6a05rTWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJCVUg5VWlBdDY4SEJmbHUvM3pNOWhxcVdicUlHaVNYQlMvTFFoSkgrMnM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDenhFQVRPTlRjNmZJYm15QXhydENBIiwicGhvbmVJZCI6IjE5NWI1ZWNkLTAwNjYtNDczZC1hODZjLTI4YzYwYWUxNWM4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhU2ZsNFV1L2RoU0laaTdTa0h1WHl3K1NMZ2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdDbUxPRkM3OFVzZ2R3N3JRZENVNFBRQnNzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFMNEVYWUhaIiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFraXNvbG9zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL250KzRHRU5uTTk3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvSU0xRzdEazUyRXI3ek5Jek9GOW1wY2pIRERsY2ZLWloza0JYanVteFRjPSIsImFjY291bnRTaWduYXR1cmUiOiJUVzkrVnQ2TUpqOGpETnA0MDExT1F3YWlLUWZ5dnFoMnVFUEo1MTVGTW10dlVXR2NVVjljNDNKYkY4S0VkbzRoaURQNUlRMEgzdUUrbkNOM3VzYzlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2ZTb1RLcEkwaTMvbmtIS2RSK1V5cjJMWDNFTXBKTk9pdFM1cGRuUVdGYjJKZkZKVFlXWDF0TjhJeVJqNEI4dzk0aHJHdW93dyt0cEdSK09XYzBiaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNETlJ1dzVPZGhLKzh6U016aGZacVhJeHd3NVhIeW1XZDVBVjQ3cHNVMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTgxODQ3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKQkgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
