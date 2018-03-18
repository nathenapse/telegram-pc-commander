const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os')

module.exports = async(command) => {
  return await exec(command, { detached: true, silent: true, cwd: os.homedir() })
}