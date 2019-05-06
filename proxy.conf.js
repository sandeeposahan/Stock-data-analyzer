const PROXY_CONFIF = [
    {
    context: [
        "/stock"
    ],
    target: "https://api.iextrading.com/1.0",
    secure: true,
    changeOrigin: true,
    logLevel : "debug"
}]
module.exports = PROXY_CONFIF;