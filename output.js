const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const request = require('request');

let dbdir = os.homedir() + '/auxdb';
let asciipath =  os.homedir() + '/auxdb/ascii.txt';
const ASCII_URL = "https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/ascii.txt";


const download = async (url, path) => {
  return new Promise((resolve, reject) => {
    request(url)
    .pipe(fs.createWriteStream(path))
    .on('finish', () => {
      console.log('download complete');
      resolve();
    })
    .on('error', (error) =>  {
      reject(err)
    })
  });
}

async function createDbFolderIfNotExist() {
  if (!fs.existsSync(dbdir)) {
    fs.mkdirSync(dbdir)
    await download(ASCII_URL, asciipath);
  }
}

function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}

const outputHelpMenu = async (menus, subCmd) => {

  await createDbFolderIfNotExist();

  const data = fs.readFileSync(asciipath, {encoding:'utf8', flag:'r'}); 
  console.log(data); // printing the cool ascii art

  await console.log(chalk.bold(menus[subCmd] || menus.main));
}

const consoleOutput = (data) => {
  console.log("\n");
  pbcopy(data);
  console.log(chalk.bold(data));
  console.log("\n");
}

const consoleError = (data) => {
  console.log("\n");
  console.log(chalk.red(data));
  console.log("\n");
}

module.exports = {
  outputHelpMenu,
  consoleOutput,
  consoleError
}