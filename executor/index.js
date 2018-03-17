const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async(command) => {
  return await exec(command, { detached: true, silent: true })
}