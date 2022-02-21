const { TwitterApi } = require("twitter-api-v2");

const client =  new TwitterApi({
    appKey: "4RDUPAwvGjx4kI3kMhgcvG0GW",
    appSecret: "swaouEtFmksZwiLmhoSwQyIjFbKpDgU0bvllo0kG4gwIDvABOE",
    accessToken: "1495805993636220937-omxSTqfLUGK1w4WUBW94SiWASUpID1",
    accessSecret: "LBJaiVaAHhXodEZKIOxeMyLKicy41UpwkuPG9L95NpVNo",
})

const rwClient = client.readWrite

module.exports = rwClient