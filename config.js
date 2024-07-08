
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk93K3ovSHJ5OExqVkJBME5CbTJxRVZPRXNOVHBRSGVaMnJTNk4rSUkyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3RseUN2OFFtS2lXaVBvdlE2MndsUU9YYXZNWEFibktPMGp4ejR3SzVWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRG5JTnRpMUpnMUhmc0hqb0tPUFBoTmxpT1QrdGJDdmlkcXJVVlVMNlVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzeW5PYUYwS0RHUFd2OG4rNjJ3QzFYaUo4MWlWdlJ4N3JHSVkvWlVETWxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBMFVnZTZzZGZHWk5JallrVDNwOWdMamVRQ2l2OCsySnYyRFNqNlpja1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh6eVh4bkxtamtHWG5uSHk4NEdWSllYV1VldElrRzZ6UzVsWEpoUGhhZ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VTdWwzc1hrVkpJeDB2d3dKdGI5THFjbCt1YTd4b0I3UjdDYlpFamxXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnI3c091VHhlNFlRSlh3bE5rNG1laHF5b200V1Y0NGtEMlpHVUJZMUdRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp6NWpsbG4xN0swMjdWK0dHUXM2cUJubjdidlRCTXk1MHVIWkwzL0hweTl2K2I1bEc3dDdveStXSGd0bWdlUkpRdEdOVGdvclFGeEpkMXdnT2hXUkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJNRnBMTG1WZTUxeDdBbk44SXJEWk9qOFJuUWFIV3NrVjRjZkMyZDR6YmVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQTmJaOXRqUlRaLWVFOFlPUmRrb0ZRIiwicGhvbmVJZCI6IjRjOTQwYjczLWJkNWUtNDlhMC1iY2UzLThmM2ViNTY1NWU3OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSkRBWVhLZHl1c0FSTThpSzBEMFdWdXdUMTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWF2K1BZR1QvZmhXNWJkOXRlVWs2TFlhTkI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhFVlNWRVZCIiwibWUiOnsiaWQiOiI5MjM0NjA5OTc3Mzk6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTk8gTU9SRSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFB1aHFNREVKR3dyclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZjFRVURrYW9PWTRBWGQ3WmtCSk14SUhUdWZ4UGVDWDd3K0VaM1FrRDNpdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidjZTcTdSZVBWRkZweGJCd1VRNmlhNTVObEd0c043dzdLbzZETzZPdEFFT2tHWGpFZmFoUXo0SC9MWTlrSC9Mb1BBamFPYVpCZ0U0ZkRiVngxMnpuQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9kWFJtVy9DUEF5Z3R4SlEvUFRiU1NvazYwRkZCNmJQT1VrZU9TbmlLbklLdUFZSWNkNklRNVptRXg0a1EvZkRtdU1VWDk5aXdtV0pVTStVQXliK0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDYwOTk3NzM5OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg5VUZBNUdxRG1PQUYzZTJaQVNUTVNCMDduOFQzZ2wrOFBoR2QwSkE5NHMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0MjQ0NjZ9" //Make sure session id starts with Byte;;;
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
