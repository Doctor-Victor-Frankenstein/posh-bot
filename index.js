const con = require('./database.js')
const config = require("./config.json")

const register = require("./scripts/register.js")
const search = require("./scripts/search.js")
const score = require("./scripts/score.js")
const tokens = require("./scripts/tokens.js")
const daily = require("./scripts/daily_post.js")

setInterval(() => {
  register.new_registrations()
}, 1000 * 60) //every minute

setInterval(() => {
  score.calculate()
}, 1000 * 60 * 30) //every 30 minutes

setInterval(() => {
  tokens.give()
}, 1000 * 60 * 60 * 24) //every 1 day

setInterval(() => {
  daily.post()
}, 1000 * 60 * 60 * 24) //every 1 day

search.start()
