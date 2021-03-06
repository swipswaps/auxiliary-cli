const minimist  = require('minimist');
const Storage =  require('./storage').Database;
let db = new Storage();


module.exports = () => {
  const cmdArgs = process.argv.slice(2);
  const args = minimist(cmdArgs);

  let cmd = args._[0] ? args._[0] : 'help';

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }
  
  switch (cmd) {
    case 'assist':
      require('./cmds/assist')(args)
      break;
    case 'help':
      require('./cmds/help')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'iw':
      require('./cmds/intern')(args, db)
      break
    case 'connect':
      require('./cmds/connect')(args, db)
      break
    default:
      let modified_args = ['assist'].concat(args._);
      args._ = modified_args
      require('./cmds/assist')(args)
  }

}