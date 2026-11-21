const crypto = require("node:crypto");
const path = require("node:path");

const rk = (n) => crypto.randomBytes(n).toString("hex");

module.exports = {
    server_keyword: process.env.SERVER_KEYWORD || rk(16),
    mongodb_uri: process.env.MONGODB_URI || "mongodb+srv://subrafael_db_user:98546478@cluster0.f7fmtb1.mongodb.net/avaris_relms?retryWrites=true&w=majority",
    mongodb_name: process.env.MONGODB_DB_NAME || "avaris_relms",
    mongodb_config: {},
    stripe_test_api_key: "",
    stripe_test_pkey: "",
    stripe_api_key: "",
    stripe_pkey: "",
    steam_web_apikey: "",
    steam_publisher_web_apikey: "",
    sdk_password: process.env.SDK_PASSWORD || rk(16),
    amazon_ses_user: "",
    amazon_ses_key: "",
    ACCESS_MASTER: process.env.ACCESS_MASTER || rk(20),
    BOT_MASTER: process.env.BOT_MASTER || rk(20),
    SERVER_MASTER: process.env.SERVER_MASTER || rk(16),
    discord_token: process.env.DISCORD_TOKEN || "",
    apple_token: "",
    steam_key: "",
};
