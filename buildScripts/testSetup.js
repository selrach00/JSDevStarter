//This file isn't transpiled, so we must use CommonJS and ESS

// Prompts Babel to transpile before testing runs
require('babel-register')();

// Disable webpack features that aren't compatible with Moca (CSS files)
require.extensions['.css'] = function() {};
