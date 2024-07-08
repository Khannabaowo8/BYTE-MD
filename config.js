
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = " bunergmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923319373288@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "false";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923319373288";
global.owner = process.env.OWNER_NUMBER || "923319373288";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "false";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0toSEpSSFdYVnRUcGs1akVVN3dOQ3FNQTNDTkJvSmJxNThBZytNR0FGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlRFVFlWRUYzTEhEVnpud2VUUnVuY1lDcGlKUldmUnF2czR5YUxSbGEyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR1YyYW9RSXhWcVFXM1ppQjJlWFhYZEE0b0FSSDhiTG8rWFE0UlVGU2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQVhaSitWbVhBK3V1T1YxZ2FPOUw1WWtrWGxZaU5BbUk2WGFQY2tkRkMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMbnpLMGIwZGJLVm5ONENzbmYrWXVYbGE3VzAvTEJTWUtBZ2xYakdwWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx5YzhMeHgycWl4SUdYQzEzR0JYS0R2U3NTbHhzNkVPVjkvU25WT1pKQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlrbUh1bVlseFlTalpBcEpPYzFuME5WWG0xZU1yRjdNOC8zWk0zQTcxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHliMTZyQUpNVGE4QWRoMnNXYkk0NTRnVXZmU2FGQllSNURnMGpqTUtuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhoMDlycHZRN2ZBNDYxYmxVVU56QVNBMFhDd0ZXZnRXbHVFUlh2cUJRM2xicXdZcCtVcktzZ3g0cVl0TElJNkkwTm43alhUY2pBM3phWnRMT21BUERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IjlaTjlJYmdHQUdGaTY3ekM4RXl3VkN1WEhnT2NucnY3VE52ZzYwUTU5ejQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndXY0JzUEo5VDZhekhrZzl6NDB2T1EiLCJwaG9uZUlkIjoiMWMyNmJiYzMtZmQzMC00YTNhLTk0NDAtNGVjY2U1MjdlZmU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpEZ28xb2ZJcE1IOHJ5YVlWK1V4THFSVEw5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOHE0YVNXTHp2b2ZiS2N5MUh5dFZuUy93bWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkZBQ0s1OE4iLCJtZSI6eyJpZCI6IjkyMzMxOTM3MzI4ODozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWZTejR3RkVOZnZyclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidHp4N0RJaWZ3RWRZbWVkNi9Oc2RwREdwak1rOCtWTjQvN3FRN3IzMjNDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWkvR2ZneENwQUhiYWdxR1dJNW0vZmkyYS9qOEMwTzlpalcxZ2JhRlZ5Zm5yb29jL2E5VzY3RlV4eVdVTmQvYzFQN0hJNTIvVHByNjJNc2xySjVZQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Im94WnpCWHBVVmJWSys0Nk1UakQrU29POVExUytoRW1OaEpZbUtMWXlJQ3BNdlJRajltTzdCckhPa1J2R0xMRWFFS3NNQnBqemlUT3JYdWV4WkNGbUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzE5MzczMjg4OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJjOGV3eUluOEJIV0pubmV2emJIYVF4cVl6SlBQbFRlUCs2a082OTl0d2wifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0MzI2MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjI1In0=" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*SAVAGE*",
  author: process.env.PACK_AUTHER || "SAVAGE",
  packname: process.env.PACK_NAME || "SAVAGE",
  botname: process.env.BOT_NAME || "SAVAGE",
  ownername: process.env.OWNER_NAME || "NOMI",
  errorChat: process.env.ERROR_CHAT || "923319373288",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Savage").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
