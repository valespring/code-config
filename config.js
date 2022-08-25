const editorconfig = require('editorconfig');
const path = require('path');
const configPath = path.join(__dirname, '/.editorconfig');

module.exports = editorconfig.parseSync(configPath);